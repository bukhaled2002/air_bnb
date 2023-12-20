import { Form, Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { useState } from "react";
import { useFormik } from "formik";
import Api from "../config/Api";
import { useDispatch, useSelector } from "react-redux";
import { onlineUser, setData } from "../store/slices/userSlice";

function Login() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state)=> state.user.data)
  console.log(user);
  async function handleSubmit(values) {
    try {
      // Make an API request to register the user
      const response = await Api.post("/login", values);
      if (response.status === 200) {
        dispatch(onlineUser())
        dispatch(setData(response.data))
        history("/");
      } else {
        // Handle registration error, e.g., show an error message
        console.error("Registration failed:", response.data.error);
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
      console.error("Error during registration:", error.response);
    }
  }
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
        onSubmit={formik.handleSubmit}
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <label className="form-control">
          <div className="label">
            <span className="label-text">email</span>
          </div>
          <input
            onChange={formik.handleChange}
            value={formik.values.email}
            className="input input-bordered"
            type="email"
            name="email"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">password</span>
          </div>
          <input
            onChange={formik.handleChange}
            value={formik.values.password}
            className="input input-bordered"
            type="password"
            name="password"
          />
        </label>
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button className="btn btn-block btn-secondary">Guest User</button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Login;
