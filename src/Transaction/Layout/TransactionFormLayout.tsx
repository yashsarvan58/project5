// import { ErrorMessage, FormikProps } from "formik";
// import ATMTextField from "../../Components/Atoms/ATM/ATMTextfield";
// import { TransactionFormValue } from "../Add/AddTransactionWrapper";

// type FormikProps = {
//     values: {
//         categoryName: string;
//         transactionDate: string;
//         amount: string;
//     };
//     handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     isSubmitting: boolean;
// }
// type Props = {
//     formikProps: FormikProps<TransactionFormValue>;
//     heading: string;
//     buttonName: string;
// };

// const TransactionFormLayout = ({ formikProps, heading, buttonName }: Props) => {
//     const { values, handleChange, isSubmitting } = formikProps;

//     return (
//         <div className="flex justify-center items-center h-screen bg-slate-500">
//             <div className="w-full max-w-md p-6 bg-slate-600 text-gray-400 border border-gray-200 rounded-lg shadow-md">
//                 <h2 className="text-xl font-semibold text-center mb-6">{heading}</h2>

//                 {/* Category Name Field */}
//                 <div className="mb-4">
//                     <ATMTextField
//                         label="Category Name"
//                         name="categoryName"
//                         placeholder="Enter Category Name"
//                         value={values.categoryName}
//                         onChange={handleChange}
//                         className="w-full"
//                     />
//                     <p className='text-red-400'><ErrorMessage name='categoryName' /></p>
//                 </div>

//                 {/* Transaction Date Field */}
//                 <div className="mb-4 ">
//                     <label> date </label>
//                     <input  
//                         name="transactionDate"
//                         placeholder="Enter Transaction Date"
//                         type="date"
//                         value={values.transactionDate}
//                         onChange={handleChange}
//                         className="w-full mt-2"
//                     /> 
//                     <p className='text-red-400'><ErrorMessage name='transactionDate' /></p>
//                 </div>

//                 {/* Amount Field */}
//                 <div className="mb-4">
//                     <ATMTextField
//                         label="Amount"
//                         name="amount"
//                         placeholder="Enter Amount"
//                         value={values.amount}
//                         onChange={handleChange}
//                         className="w-full"
//                     />
//                     <p className='text-red-400'><ErrorMessage name='amount' /></p>
//                 </div>

//                 {/* Submit Button */}
//                 <div>
//                     <button
//                         type="submit"
//                         className="border rounded bg-blue-600 w-full h-12 p-2 font-light text-xl text-white"
//                         disabled={isSubmitting}
//                     >
//                         {buttonName}
//                     </button>
//                 </div>

//             </div>
//         </div>
//     );
// };
// export default TransactionFormLayout;  


import { ErrorMessage, FormikProps } from "formik";
import ATMTextField from "../../Components/Atoms/ATM/ATMTextfield";
import { TransactionFormValue } from "../Add/AddTransactionWrapper";


type FormikProps = {
    values: {
        categoryName: string;
        transactionDate: string;
        amount: string;
        transactionType: string;
        remark: string;
    };
    
}
type Props = {
    formikProps: FormikProps<TransactionFormValue>;
    heading: string;
    buttonName: string;
};

const TransactionFormLayout = ({ formikProps, heading, buttonName,handleAdd }: Props) => {
    const { values, handleChange, isSubmitting } = formikProps;
    
    

    return (
        <div className="flex justify-center items-center h-screen bg-slate-500">
            <div className="w-full max-w-md p-6 bg-slate-600 text-gray-400 border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-center mb-6">{heading}</h2>

                {/* Category Name Field */}
                <div className="mb-4">
                    <ATMTextField
                        label="Category Name"
                        name="categoryName"
                        placeholder="Enter Category Name"
                        value={values.categoryName}
                        onChange={handleChange}
                        className="w-full"
                    />
                    <p className='text-red-400'><ErrorMessage name='categoryName' /></p>
                </div>

                {/* Transaction Date Field */}
                <div className="mb-4">
                    <label className="block">Transaction Date</label>
                    <input
                        name="date"
                        type="date"
                        value={values.transactionDate}
                        onChange={handleChange}
                        className="w-full mt-2 p-2 border border-gray-300 rounded"
                    />
                    <p className='text-red-400'><ErrorMessage name='transactionDate' /></p>
                </div>

                {/* Transaction Type Field */}
                <div className="mb-4">
                    <label className="block">Type</label>
                    <select
                        name="Type"
                        value={values.transactionType}
                        onChange={handleChange}
                        className="w-full mt-2 p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Type</option>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                    </select>
                    <p className='text-red-400'><ErrorMessage name='transactionType' /></p>
                </div>

                {/* Amount Field */}
                <div className="mb-4">
                    <ATMTextField
                        label="Amount"
                        name="amount"
                        placeholder="Enter Amount"
                        value={values.amount}
                        onChange={handleChange}
                        className="w-full"
                    />
                    <p className='text-red-400'><ErrorMessage name='amount' /></p>
                </div>

                {/* Remark Field */}
                <div className="mb-4">
                    <ATMTextField
                        label="Remark"
                        name="remark"
                        placeholder="Enter Remark"
                        value={values.remark}
                        onChange={handleChange}
                        className="w-full"
                    />
                    <p className='text-red-400'><ErrorMessage name='remark' /></p>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        // type="submit"
                        className="border rounded bg-blue-600 w-full h-12 p-2 font-light text-xl text-white"
                        disabled={isSubmitting}
                        onClick={handleAdd}
                    >
                        {buttonName}
                    </button>
                </div>
            </div>
        </div>
    );
};
export default TransactionFormLayout;


