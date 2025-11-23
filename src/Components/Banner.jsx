import Link from "next/link";

export default function Banner(){
    return (
         <div
      className="hero"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/LXqC4nG0/plumber.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl font-bold">
            Power Up Your Home with Trusted Electricians
          </h1>
          <p className="mb-5">
            Get quick and safe electrical repairs from certified professionals.
            From wiring issues to light installations — we’ve got you covered.
          </p>
          <Link href="/services" className="btn btn-primary">see all services</Link>
        </div>
      </div>
    </div>
    )
}