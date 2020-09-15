import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input form-control" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select className="form-control" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const BadgeForm = (props) => {
  return (
    <>
      <h1>New Attendant</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          twitterUsername: "",
          jobTitle: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          twitterUsername: Yup.string().required("Required"),
          jobTitle: Yup.string()
            .oneOf(
              [
                "Designer",
                "Developer",
                "Product Manager",
                "other",
                "Software Engineer",
              ],
              "Invalid Job Type"
            )
            .required("Please Select a Job Title"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ handleChange }) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              onChange={(e) => {
                handleChange(e);
                props.updateBadge(e.target.name, e.target.value);
              }}
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              type="text"
              onChange={(e) => {
                handleChange(e);
                props.updateBadge(e.target.name, e.target.value);
              }}
            />
            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              onChange={(e) => {
                handleChange(e);
                props.updateBadge(e.target.name, e.target.value);
              }}
            />
            <MySelect
              label="Job Title"
              name="jobTitle"
              onChange={(e) => {
                handleChange(e);
                props.updateBadge(e.target.name, e.target.value);
              }}
            >
              <option value="">Select a job type</option>
              <option value="Designer">Designer</option>
              <option value="Developer">Developer</option>
              <option value="Product Manager">Product Manager</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Other">Other</option>
            </MySelect>
            <MyTextInput
              label="Twitter Username"
              name="twitterUsername"
              type="twitterUsername"
              onChange={(e) => {
                handleChange(e);
                props.updateBadge(e.target.name, e.target.value);
              }}
            />

            <br />

            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default BadgeForm;
