
import { useNavigate } from "react-router-dom";
import { object, string, number } from "yup";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import TransactionFormLayout from "../Layout/TransactionFormLayout";
import { useAddTransactionMutation } from "../../Slice/TransactionSlice";

export type TransactionFormValue = {
  categoryName: string;
  date: string;
  type: string;
  amount: number;
  remark: string;
};

const AddTransactionFormWrapper = () => {
  const navigate = useNavigate();
  const [addTransaction] = useAddTransactionMutation(); // Moved outside of handleSubmit

  const initialvalues: TransactionFormValue = {
    categoryName: "",
    date: "",
    type: "",
    amount: 0,
    remark: "",
  };

  const TransactionValidation = object({
    categoryName: string().required("Category Name is required"),
    date: string().required("Date is required"),
    type: string().required("Transaction Type is required"),
    amount: number()
      .required("Amount is required")
      .positive("Amount must be positive"),
    remark: string().optional(),
  });
  const handleAdd=()=>{
    
    alert("s")
  }
  const handleSubmit = async (values: TransactionFormValue) => {
    console.log("Form submitted", values);

    const token = localStorage.getItem("token");
    console.log("Token:", token);

    try {
      // Make the API call with addTransaction
      const response = await addTransaction({ values, token }).unwrap();
      console.log("Transaction added successfully:", response);
      
      // Show success notification
      toast.success("Transaction added successfully!");
      
      // Redirect to another page, e.g., the transaction list page
      navigate("/transactions");
    } catch (error) {
      // Show error notification
      toast.error("Failed to add transaction. Please try again.");
      console.error("Error adding transaction:", error);
    }
  };

  return (
    <Formik
      initialValues={initialvalues}
      validationSchema={TransactionValidation}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, ...formikProps }) => (
        <Form onSubmit={handleSubmit}>
          <TransactionFormLayout
            heading={"Add Transaction"}
            buttonName="Add"
            formikProps={formikProps}
            handleAdd={handleAdd}
          />
          {/* The submit button should have type="submit" */}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddTransactionFormWrapper;



