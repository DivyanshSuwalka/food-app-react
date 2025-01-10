import React from "react";
import { Formik } from "formik";

const Login = () => (
  <div className="p-3 m-5 text-center">
    <p className="text-2xl text-center font-light">Welcome to signup!</p>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="p-3 m-3">
          <br/>
          <input
            className="bg-zinc-100 font-light p-1 m-2 px-5 rounded-md focus:bg-white"
            placeholder="email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}<br/>
          <input
            className="bg-zinc-100 font-light p-1 m-2 px-5 rounded-md focus:bg-white"
            placeholder="password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}<br/>
          <button
            type="submit"
            disabled={isSubmitting}
            className="font-light m-2 p-1 px-4 bg-zinc-200 rounded-md hover:bg-zinc-400"
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Login;
