import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ProjectInterface } from "../../types/ProjectInterface";

import { Flex, Box, Button } from "rebass";

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

const ErrorBox: React.FC<{
  name: string;
  component: string;
}> = ({ name, component }) => {
  return (
    <StyledBox>
      <ErrorMessage name="name" component="div" />
    </StyledBox>
  );
};

const padding = 1.5;
const fontSize = 1;
const borderRadius = 0.25;
const height = 6.25;
const widthText = 15;

// Note: Hacky below. Figure out why text area width
// behaves differently
const widthTextArea = widthText + 4;

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
          padding: ${padding}em;
          background-color: ${theme.colors.muted};
          font-size: ${fontSize}em;
          width: ${widthText}em;
          border-radius: ${borderRadius}em;
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
          padding: ${padding}em;
          background-color: ${theme.colors.muted};
          font-size: ${fontSize}em;
          height: ${height}em;
          width: ${widthTextArea}em;
          border-radius: ${borderRadius}em;
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
                <ErrorBox name="name" component="div" />
                {/* TODO: Add category */}

                <LabelBox htmlFor="website" label="Website" />
                <StyledTextFieldBox name="website" placeholder="https://" />
                <ErrorBox name="website" component="div" />

                <LabelBox htmlFor="twitter" label="Twitter" />
                <StyledTextFieldBox name="twitter" placeholder="@jack" />
                <ErrorBox name="twitter" component="div" />

                <LabelBox htmlFor="description" label="Description" />
                <StyledTextAreaFieldBox
                  name="description"
                  placeholder="This project..."
                />
                <ErrorBox name="description" component="div" />

                <StyledBox>
                  {status && status.msg && <div>{status.msg}</div>}
                </StyledBox>
                <StyledBox>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    mr={2}
                  >
                    Submit
                  </Button>
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
