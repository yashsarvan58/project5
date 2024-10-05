// import React, { useEffect, useState } from 'react';

// import TransactionShow from './AddTransaction';

// const TransactionShowWrapper = () => {
//   const [transactions, setTransactions] = useState([ 
// {id:1,date:11/22/8888,remark:"kjhgf",type:"online",amount:3000}

//   ]);

  

//   return <TransactionShow transactions={transactions} />;
// };

// export default TransactionShowWrapper;


import { useNavigate } from "react-router-dom";
// import { useAddTransactionMutation } from "../../Slice/TransactionSlice";
import { object, string } from "yup";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import TransactionFormLayout from "../Layout/TransactionFormLayout";
import { useAddTransactionMutation } from "../../Slice/TransactionSlice";

export type TransactionFormValue = {
  transactionName: string;
};

const AddTransactionFormWrapper = () => {
  
  const navigate = useNavigate();
  const [addTransaction]=useAddTransactionMutation()

  const token = localStorage.getItem("Token");
  console.log("Tokensss: ", token);
  

  const initialvalues: TransactionFormValue = {
    transactionName: "",
  };

  const TransactionValidation = object({
    TransactionName: string().required("Transaction is required"),
  });

  const handleSubmit = (values: TransactionFormValue) => {
    const token = localStorage.getItem("Token");
    addTransaction({ transactionData: values, token })
  .then((res: any) => {
    console.log("Response:", res);
    if (res.data?.status === "OK") {
      toast.success("Transaction added successfully");
      navigate("/layout/Transaction-list");
    } else {
      toast.error(res.data.msg || "Failed to add Transaction");
    }
  })
  .catch((err) => {
    toast.error("error");
    console.log("Error:", err);
  });

  };

  return (
    <Formik
      initialValues={initialvalues}
      validationSchema={TransactionValidation}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, ...formikProps }: any) => (
        <Form onSubmit={handleSubmit}>
          <TransactionFormLayout
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
