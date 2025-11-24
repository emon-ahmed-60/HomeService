"use client";
import ProtectedRoute from "@/Components/ProtectedRoute";
import { toast } from "react-toastify";

export default function AddService() {
  const handleAddService = (e) => {
    e.preventDefault();
    const created_at = new Date();
    const serviceName = e.target.service.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const description = e.target.desc.value;
    const serviceImg = e.target.photo.value;
    const newService = {
      serviceName,
      category,
      description,
      serviceImg,
      created_at,
      price,
    };

    fetch("https://home-server-nine.vercel.app/add-service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((data) => {
        toast.success("service added");
      })
      .catch((err) => {
        toast.error(err.code);
      });
    e.target.reset();
  };
  return (
    <>
    <ProtectedRoute>
      <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleAddService}>
            <fieldset className="fieldset">
              <label className="label">Service Name</label>
              <input
                type="text"
                className="input"
                placeholder="service name"
                name="service"
              />
              <label className="label">Category</label>
              <input
                type="text"
                className="input"
                placeholder="Category"
                name="category"
              />
              <label className="label">Price</label>
              <input
                type="number"
                className="input"
                placeholder="Price"
                name="price"
              />
              <label className="label">Description</label>
              <input
                type="text"
                className="input"
                placeholder="Description"
                name="desc"
              />
              <label className="label">Image URL</label>
              <input
                type="text"
                className="input"
                placeholder="Image URL"
                name="photo"
              />

              <button className="btn btn-neutral mt-4">Add Service</button>
            </fieldset>
          </form>
        </div>
      </div>
      </ProtectedRoute>
    </>
  );
}
