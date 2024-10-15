import { useNavigate, useParams } from "react-router-dom";
// import {
//   useEditTransactionMutation,
//   useGetSingleTransactionQuery,
// } from "../../Slice/CategoriesSlice";
import { object, string } from "yup";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import TransactionFormLayout from "../Layout/TransactionFormLayout";
import { useEditTransactionMutation, useGetSingleTransactionQuery } from "../../Slice/TransactionSlice";

export type TransactionFormValue = {
  transactionName: string | null;
};

const EditTransactionWrapper = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("Token");
  const [editTransaction] = useEditTransactionMutation();
  const { id } = useParams();
  const { data } = useGetSingleTransactionQuery({ token, id });


  const initialValues = {
    transactionName: data?.data?.transactionName,
  };
  const TransactionValidation = object({
    transactionName: string().required("Name is required"),
  });

  const handleSubmit = (values: TransactionFormValue) => {
    editTransaction({ transactionData: values, id, token })
      .then((res: any) => {
        if (res.data.msg) {
          toast.success("Transaction edited successfully");
        }
        navigate("/layout/Transaction-history");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={TransactionValidation}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, ...formikProps }: any) => (
        <Form onSubmit={handleSubmit}>
          <TransactionFormLayout
            heading={"Edit Transaction"}
            buttonName="Edit"
            formikProps={formikProps}
          />
        </Form>
      )}
    </Formik>
  );
};

export default EditTransactionWrapper;
