import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./FormProject.css";

const FormGeneric: React.FC<{ children: any }> = props => {
  return <div className={"container"}>{props.children}</div>;
};

// name
// category
// website
// twitter
// description

interface FormProjectValues {
  name: string;
  website: string;
  twitter: string;
  description: string;
}

const NewProjectSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  website: Yup.string()
    .url()
    .required("Required"),
  twitter: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(1000, "Too Long!")
});

const FormProject: React.FC<{}> = () => {
  const initialValues: FormProjectValues = {
    name: "",
    website: "https://",
    twitter: "",
    description: ""
  };
  return (
    <FormGeneric>
      <Formik
        initialValues={initialValues}
        validationSchema={NewProjectSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        render={({ status, isSubmitting }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />
            <label htmlFor="website">Website</label>
            <Field
              type="text"
              id="website"
              name="website"
              placeholder="https://"
            />
            <ErrorMessage name="website" component="div" />
            <label htmlFor="twitter">twitter</label>
            <Field
              type="text"
              id="twitter"
              name="twitter"
              placeholder="@jack"
            />
            <ErrorMessage name="twitter" component="div" />
            <label htmlFor="description">Description</label>
            <Field
              type="text"
              component="textarea"
              id="description"
              name="description"
              placeholder="This project..."
            />
            <ErrorMessage name="name" component="div" />

            {status && status.msg && <div>{status.msg}</div>}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      />
    </FormGeneric>
  );
};

export default FormProject;
