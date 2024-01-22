import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthProvider";
import useToken from "../hooks/useToken/useToken";
import SocialLogin from "../SocialLogin/SocialLogin";
import Spinner from "../Spinner/Spinner";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { user, login, saveUser, seLoading, loading } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [loggedUserEmail, setLoggedUserEmail] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(loggedUserEmail);

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      toast("Logged in  Succesfully");
      navigate(from, { replace: true });
      console.log("dhukse");
      seLoading(false);
    }
  }, [token]);
  if (user) {
    navigate("/");
  }

  const handleToLogin = (data) => {
    seLoading(true);
    login(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        console.log("ekhane");

        setLoggedUserEmail(res.user.email);
        console.log(loggedUserEmail);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        seLoading(false);
        toast.error(err.message);
      });
  };
  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="bg-orange-100">
      <Helmet>
        <title>Sterio Music | Login</title>
      </Helmet>
      <div className="border rounded-lg  m-3.5 container mx-auto max-w-md p-3">
        <form onSubmit={handleSubmit(handleToLogin)}>
          <h4 className="text-2xl text-center my-2 popin font-bold">Login</h4>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              className="input input-bordered w-full"
              {...register("email", {
                required: "Provide a email",
              })}
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-600 py-2" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              className="input input-bordered w-full  "
              {...register("password", {
                required: "Provide a password",
              })}
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-600 py-2" role="alert">
                {errors.email?.password}
              </p>
            )}
          </div>

          <div className="w-full text-center my-2">
            <input
              type="submit"
              className="btn btn-gray   w-full "
              value="Login"
            />
          </div>
          <p className="mt-3 text-center">
            New to Sterio Music?
            <Link to="/signup" className="text-secondary mx-2">
              SignUp
            </Link>
          </p>
          {signUpError && <p className="text-red-600">{signUpError}</p>}
          <div className="divider">OR</div>
        </form>
        {/* <SocialLogin></SocialLogin> */}
      </div>
    </div>
  );
};

export default Login;
