
import { useNavigate } from "react-router-dom";
import { object, string, number } from "yup";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import TransactionFormLayout from "../Layout/TransactionFormLayout";
import { useAddTransactionMutation } from "../../Slice/TransactionSlice";
import { useGetCategoryQuery } from "../../Slice/CategoriesSlice";

export type TransactionFormValue = {
  // categoryName: string;
  date: string;
  type: string;
  amount: number;
  remark: string;
};

const AddTransactionFormWrapper = () => {
  const token = localStorage.getItem("token");
  const {data}=useGetCategoryQuery('')
  // console.log(data);
  
  const navigate = useNavigate();
  const [addTransaction] = useAddTransactionMutation();

  const initialValues: TransactionFormValue = {
    // categoryName: "",
    date: "",
    type: "",
    remark: "",
    amount:0,
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
    console.log("value", values);


    // Make the API call with addTransaction, passing the headers correctly
    addTransaction({ transactionData: values,token })
      .then((response) => {
        console.log("hhhh", response);
        if (response?.data.status) {
          toast.success(response?.data.msg)
          navigate("/layout/transaction-history");
        } else {
        toast.error(response?.data.msg);
          
        }
        // Show success notification
      
        
        // Redirect to another page, e.g., the transaction list page
      })
      .catch((error) => {
        // Show error notification
        toast.error("Failed to add transaction. Please try again.");
      });
  };



  return (
    <Formik
      initialValues={initialValues}
      validationSchema={TransactionValidation}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, ...formikProps }) => (
        <Form onSubmit={handleSubmit}>
          <TransactionFormLayout
          data={data}
            heading={"Add Transaction"}
            buttonName="Add"
            formikProps={formikProps}
          />
         
        </Form>
      )}
    </Formik>
  );
};

export default AddTransactionFormWrapper;



