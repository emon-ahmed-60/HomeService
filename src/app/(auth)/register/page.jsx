"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../../lib/authContext";

export default function Register() {
    const router = useRouter();
  const { signUpWithEmail } = useAuth();
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signUpWithEmail(email, password)
      .then((res) => {
        router.push("/")
      })
      .catch((err) => {
        console.log(err);
      });
      e.target.reset()
  };
  return (
    <>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
              />
              
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}
