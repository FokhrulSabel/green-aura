import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <div className="bg-base-200 my-15 rounded p-15">
        <div className="flex flex-col justify-items-center mx-auto gap-4">
          <div className="text-center mb-5">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="mx-auto bg-base-100 w-full max-w-sm shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Name" />
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />

                <button className="btn btn-primary mt-4">Register</button>
                <p>
                  Already Have an Account?<span> </span>
                  <Link to="/auth/login" className="text-primary font-bold">
                    Log In
                  </Link>
                </p>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
