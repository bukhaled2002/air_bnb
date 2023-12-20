import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import Api from "../config/Api";
import { useFormik } from "formik";

function Register() {
  const history = useNavigate();

  async function handleSubmit(values) {
    console.log(values);
    try {
      // Make an API request to register the user
      const response = await Api.post("/register", values);
      console.log(response.data);
      if (response.status === 200) {
        history("/login");
      } else {
        // Handle registration error, e.g., show an error message
        console.error("Registration failed:", response.data.error);
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  }
  let formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    // validationSchema,
    onSubmit: handleSubmit,
  });
  console.log(formik.values);
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 flex flex-col gap-y-4 shadow-lg"
        onSubmit={formik.handleSubmit}
      >
        <label className="form-control">
          <div className="label">
            <span className="label-text">username</span>
          </div>
          <input
            type="text"
            name="username"
            className="input input-bordered"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </label>
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
          <SubmitBtn text="Register" />
        </div>
        <p className="text-center">
          Already a member
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            log in
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Register;
