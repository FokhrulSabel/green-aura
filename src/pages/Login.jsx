import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { logIn } = use(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <div className="w-11/12 mx-auto my-10">
        <div className="flex flex-col justify-items-center mx-auto gap-4 ">
          <div className="text-center mb-5 ">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <div className="mx-auto w-full max-w-sm shadow-2xl bg-base-200 rounded">
            <form onSubmit={handleLogIn} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                  required
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <div>
                  <a className="link link-hover text-base-300">
                    Forgot password?
                  </a>
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  Login
                </button>
                <p>
                  Don't Have an Account?<span> </span>
                  <Link to="/auth/register" className="text-primary font-bold">
                    Register Now!
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
