import { useNavigate, useParams } from "react-router-dom";
import { object, string, number } from "yup";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import TransactionFormLayout from "../Layout/TransactionFormLayout";
import {
  useEditTransactionMutation,
  useGetSingleTransactionQuery,
} from "../../Slice/TransactionSlice";

import { useGetCategoryQuery } from "../../Slice/CategoriesSlice";

export type TransactionFormValue = {
  // categoryName: string;
  date: string;
  type: string;
  amount: number;
  remark: string;
};

const EditTransactionWrapper = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { id } = useParams();
  
  const { data: categoryData} = useGetCategoryQuery({token});
  const { data: transactionData } = useGetSingleTransactionQuery({ token, id });
  const [editTransaction] = useEditTransactionMutation();
  

  const initialValues: TransactionFormValue = {
    // categoryName: transactionData?.data?.categoryName || "",
    date: transactionData?.data?.date || "",
    type: transactionData?.data?.type || "",
    amount: transactionData?.data?.amount || 0,
    remark: transactionData?.data?.remark || "",
  };

  const TransactionValidation = object({
    // categoryName: string().required("Category Name is required"),
    date: string().required("Date is required"),
    type: string().required("Transaction Type is required"),
    amount: number()
      .required("Amount is required")
      .positive("Amount must be positive"),
    remark: string().optional(),
  });

  const handleSubmit = (values: TransactionFormValue) => {
    editTransaction({ EditData: values, id, token })
      .then((res: any) => {
        console.log(values,'yyyy')
        console.log(res,'kkkkk')
        if (res?.data?.status) {
          toast.success(res?.data?.msg || "Transaction edited successfully");
          navigate("/layout/transaction-history");
        } else {
          toast.error(res?.data?.msg || "Failed to edit transaction. Please try again.");
        }
      })
      .catch(() => {
        toast.error("Failed to edit transaction. Please try again.");
      });
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={TransactionValidation}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, ...formikProps }) => (
        <Form onSubmit={handleSubmit}>
          <TransactionFormLayout
            data={categoryData}
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

