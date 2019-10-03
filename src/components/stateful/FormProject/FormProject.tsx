import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ProjectInterface } from "../../../types/ProjectInterface";

import { Flex, Box } from "rebass";

const FormGeneric: React.FC<{ children: any }> = props => {
  return <div>{props.children}</div>;
};

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

const StyledBox: React.FC<{ children: any }> = props => {
  return (
    <Box width={1} px={2} my={2}>
      {props.children}
    </Box>
  );
};

const FormProject: React.FC<{}> = () => {
  const initialValues: ProjectInterface = {
    name: "",
    website: "https://",
    twitter: "",
    description: "",
    type: "",
    tagline: ""
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
          <Flex
            mx={-2}
            flexWrap="wrap"
            flexDirection="row"
            justifyContent="center"
          >
            <Form>
              <h2>Create a listing</h2>
              <StyledBox>
                <label htmlFor="name">Name</label>
              </StyledBox>
              <StyledBox>
                <Field type="text" id="name" name="name" placeholder="Name" />
              </StyledBox>
              <StyledBox>
                <ErrorMessage name="name" component="div" />
              </StyledBox>
              <StyledBox>
                <label htmlFor="website">Website</label>
              </StyledBox>
              <StyledBox>
                <Field
                  type="text"
                  id="website"
                  name="website"
                  placeholder="https://"
                />
              </StyledBox>
              <StyledBox>
                <ErrorMessage name="website" component="div" />
              </StyledBox>
              <StyledBox>
                <label htmlFor="twitter">Twitter</label>
              </StyledBox>
              <StyledBox>
                <Field
                  type="text"
                  id="twitter"
                  name="twitter"
                  placeholder="@jack"
                />
              </StyledBox>
              <StyledBox>
                <ErrorMessage name="twitter" component="div" />
              </StyledBox>
              <StyledBox>
                <label htmlFor="description">Description</label>
              </StyledBox>
              <StyledBox>
                <Field
                  type="text"
                  component="textarea"
                  id="description"
                  name="description"
                  placeholder="This project..."
                />
              </StyledBox>
              <StyledBox>
                <ErrorMessage name="name" component="div" />
              </StyledBox>
              <StyledBox>
                {status && status.msg && <div>{status.msg}</div>}
              </StyledBox>
              <StyledBox>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </StyledBox>
            </Form>
          </Flex>
        )}
      />
    </FormGeneric>
  );
};

export default FormProject;
