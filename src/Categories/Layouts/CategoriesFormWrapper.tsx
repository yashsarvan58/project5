import React, from 'react';
import { Formik, Form } from 'formik';


import CategoriesFormLayouts from './CategoriesFormLayouts';


type Props = {};

const CategoriesFormWrapper = (props: Props) => {


  return (
    <Formik >
      {(formikProps) => {
        return (
          <Form>
            <CategoriesFormLayouts formikProps={formikProps} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default CategoriesFormWrapper;
