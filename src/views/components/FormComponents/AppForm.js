import React from "react";
import { Formik } from "formik";

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    > 
    {(formikProps) =>
      typeof children === "function"
        ? children(formikProps)
        : children
    }
      </Formik>
  );
}

export default AppForm;
