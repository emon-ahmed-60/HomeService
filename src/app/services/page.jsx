"use client";

import ServiceCard from "@/Components/ServiceCard";
import { useEffect, useState } from "react";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleFilter = (e) => {
    e.preventDefault();
    const minPrice = e.target.minPrice.value;
    const maxPrice = e.target.maxPrice.value;
    fetch(
      `http://localhost:5000/filter-services?minPrice=${minPrice}&maxPrice=${maxPrice}`
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  };
  return (
    <>
     
        <h1 className="font-bold text-3xl text-base-content text-center mt-1 mb-3">
        All Services
      </h1>
      <form
        onSubmit={handleFilter}
        className="my-4 flex gap-5 flex-col md:flex-row"
      >
        <input
          type="number"
          placeholder="min value"
          className="input"
          name="minPrice"
          required
        />
        <input
          type="number"
          placeholder="max value"
          className="input"
          name="maxPrice"
          required
        />
        <button className="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-funnel-icon lucide-funnel"
          >
            <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
          </svg>{" "}
          filter by price
        </button>
      </form>

      {services.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard data={service} key={service._id} />
          ))}
        </div>
      ) : (
        <h1 className="font-bold text-3xl text-base-content text-center mt-1 mb-3">
          Services Is Not Available
        </h1>
      )}
     
    </>
  );
}
