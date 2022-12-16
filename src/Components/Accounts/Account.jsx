import "./Account.css";
import { useFormik } from "formik";
import { Schema } from "../../validation/schema";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

function Account() {
  const editProfile = async (data) => {
    const res = await axios.post(
      "https://gofarm-ng.vercel.app/api/register",
      data
    );
    return res;
  };

  // PUT UR URL INTO THIS FUNCTION
  // const getData = async () => {
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  //   return res;
  // };

  //USEQUERY TO GET DATA FROM BACKEND
  // const { data, isError, isLoading, error } = useQuery({
  //   queryKey: ["todos"],
  //   queryFn: getData,
  // });
  const { mutate } = useMutation(editProfile);

  // console.log(data);

  const submitForm = (values) => {
    const data = { ...values, role: "seller" };

    console.log(data, "FORM DATA");
    mutate(data);
    // console.log(values, 22222);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      phoneNumber: "",
      password: "",
      firstname: "",
      lastname: "",
      confirmPassword: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      submitForm(values);
      console.log(values, "VALUES");
    },
  });

  // if (isError) {
  //   return <p>{error.message}</p>;
  // }

  return (
    <>
      <h4 className="header">Account Settings</h4>

      <form onSubmit={formik.handleSubmit}>
        <div className="form-name">
          <label htmlFor="firstname">First name</label>

          <input
            id="firstname"
            type="text"
            name="firstname"
            placeholder="Enter your First Name"
            className="input-name"
            onChange={formik.handleChange}
            value={formik.values.firstname}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <div style={{ color: "red" }}>{formik.errors.firstname}</div>
          ) : (
            ""
          )}
        </div>

        <div className="form-last">
          <label htmlFor="lastname">Last name</label>

          <input
            id="lastname"
            type="text"
            name="lastname"
            placeholder="Enter your Last Name"
            className="input-name"
            onChange={formik.handleChange}
            value={formik.values.lastname}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <div style={{ color: "red" }}>{formik.errors.lastname}</div>
          ) : (
            ""
          )}
        </div>

        <div className="form-new">
          <label htmlFor="phone">Phone Number</label>

          <input
            id="phone"
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            className="input-name"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div style={{ color: "red" }}>{formik.errors.phone}</div>
          ) : (
            ""
          )}
        </div>

        <div className="form-email">
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="text"
            name="email"
            placeholder="Enter your Email"
            className="input-name"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : (
            ""
          )}
        </div>

        <div className="form-current">
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="text"
            name="password"
            placeholder="Enter your password"
            className="input-name"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : (
            ""
          )}
        </div>

        <div className="form-confirm">
          <label htmlFor="confirmPassword">Confirm Password</label>

          <input
            id="confirmPassword"
            type="text"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="input-name"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div style={{ color: "red" }}>{formik.errors.confirmPassword}</div>
          ) : (
            ""
          )}
        </div>

        <button className="btn" type="submit">
          Save Changes
        </button>
      </form>
    </>
  );
}

export default Account;
