import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ProjectInterface } from "../../types/ProjectInterface";

import { Flex, Box } from "rebass";

import { css } from "emotion";

import { useTheme } from "emotion-theming";

// Note: Using a .jsx version of this file
// as opposed to TypeScript because of:
// https://github.com/alampros/react-confetti/issues/72
import Confetti from "../presentational/Confetti";

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
    <Box width={1} my={2}>
      {props.children}
    </Box>
  );
};

const LabelBox: React.FC<{
  htmlFor: string;
  label: string;
}> = ({ htmlFor, label }) => {
  return (
    <StyledBox>
      <b>
        <label htmlFor={htmlFor}>{label}</label>
      </b>
    </StyledBox>
  );
};

const StyledTextFieldBox: React.FC<{
  name: string;
  placeholder: string;
}> = ({ name, placeholder }) => {
  const theme: any = useTheme();
  return (
    // TODO: Make sure the width isn't wider than the screen on mobile
    <StyledBox>
      <Field
        className={css`
          padding: 24px;
          background-color: ${theme.colors.muted};
          font-size: 16px;
          width: 100%;
          border-radius: 4px;
          &:hover {
            color: ${theme.colors.tertiary};
          }
        `}
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
      />{" "}
    </StyledBox>
  );
};

const StyledTextAreaFieldBox: React.FC<{
  name: string;
  placeholder: string;
}> = ({ name, placeholder }) => {
  const theme: any = useTheme();

  return (
    // TODO: DRY this styling up with regular text field input?
    <StyledBox>
      <Field
        className={css`
          padding: 24px;
          background-color: ${theme.colors.muted};
          font-size: 16px;
          height: 100px;
          width: 100%;
          border-radius: 4px;
          &:hover {
            color: ${theme.colors.tertiary};
          }
        `}
        type="text"
        component="textarea"
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </StyledBox>
  );
};

const FormProject: React.FC<{}> = () => {
  const initialValues: ProjectInterface = {
    name: "",
    category: "",
    website: "https://",
    twitter: "",
    description: "",
    type: "",
    tagline: "",
    index: ""
  };

  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <FormGeneric>
        <Formik
          initialValues={initialValues}
          validationSchema={NewProjectSchema}
          onSubmit={(values, actions) => {
            console.log({ values });
            // alert(JSON.stringify(values, null, 2));
            setSubmitted(true);
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
                <LabelBox htmlFor="name" label="Name" />
                <StyledTextFieldBox name="name" placeholder="Name" />
                <StyledBox>
                  <ErrorMessage name="name" component="div" />
                </StyledBox>
                {/* TODO: Add category */}

                <LabelBox htmlFor="website" label="Website" />
                <StyledTextFieldBox name="website" placeholder="https://" />
                <StyledBox>
                  <ErrorMessage name="website" component="div" />
                </StyledBox>
                <LabelBox htmlFor="twitter" label="Twitter" />
                <StyledTextFieldBox name="twitter" placeholder="@jack" />
                <StyledBox>
                  <ErrorMessage name="twitter" component="div" />
                </StyledBox>
                <LabelBox htmlFor="description" label="Description" />
                <StyledTextAreaFieldBox
                  name="description"
                  placeholder="This project..."
                />
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
      <Confetti start={submitted} variant={"bottom"} />
    </div>
  );
};

export default FormProject;
