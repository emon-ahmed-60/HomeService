"use client";

import Swal from "sweetalert2";
import ProtectedRoute from "../../Components/ProtectedRoute";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ManageServicePage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://home-server-nine.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleServiceDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this Service",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://home-server-nine.vercel.app/delete-service/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your service has been deleted.",
              icon: "success",
            });
            const remaining = services.filter((service) => service._id !== id);
            setServices([...remaining]);
          })
          .catch((err) => {
            toast.error(err.code);
          });
      }
    });
  };
  return (
    <ProtectedRoute>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Service-Name</th>
              <th>price</th>
              <th>created_at</th>
              <th>view Service</th>
              <th>Delete Service</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, idx) => {
              return (
                <tr key={service._id}>
                  <th>{idx + 1}</th>
                  <td> {service.serviceName} </td>
                  <td> {service.price} </td>
                <td>{service.created_at}</td>
                  
                  <td>
                    <Link href={`/services/${service._id}`}  className="btn btn-primary rounded-full">view</Link>
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handleServiceDelete(service._id)}
                      className="btn btn-primary rounded-full"
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </ProtectedRoute>
  );
}
