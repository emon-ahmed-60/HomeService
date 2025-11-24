"use client";

import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

export default function LatestServices() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://home-server-nine.vercel.app/latest-services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <h1 className="font-bold text-3xl text-base-content text-center mt-8">
        Our Latest Services
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {services.map((service) => (
          <ServiceCard data={service} key={service._id} />
        ))}
      </div>
    </>
  );
}
