// import React from 'react'

// type Props = {}

// const TransactionFormLayout = (props: Props) => {
//   return (
//     <div>TransactionFormLayout</div>
//   )
// }

// export default TransactionFormLayout



// import React from 'react';

// type Transaction = {
//   id: number;
//   amount: number;
//   type: string;
//   remark: string;
//   date: string;
// };

// type Props = {
//   transactions: Transaction[];
//   onEdit: (id: number) => void;
//   onDelete: (id: number) => void;
//   onAddNew: () => void;
// };

// const TransactionShow: React.FC<Props> = ({ transactions, onEdit, onDelete, onAddNew }) => {
//   return (
//     <div className="h-full w-full bg-slate-500 text-gray-300 p-4">
//       <div className="flex items-center justify-center pt-[100px]">
//         <div className="bg-slate-600 rounded-lg shadow-md p-5 w-full max-w-3xl">
          
//           {/* Header with Add Button */}
//           <div className="flex justify-between items-center mb-4 flex-col sm:flex-row">
//             <h1 className="text-2xl font-semibold text-center mb-2 sm:mb-0">Transactions</h1>
//             <button 
//               onClick={onAddNew} 
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-sm sm:text-base"
//             >
//               Add New Transaction
//             </button>
//           </div>
          
//           {/* Table for Transactions */}
//           <div className="overflow-x-auto">
//             <table className="min-w-full border-collapse">
//               <thead>
//                 <tr className="text-zinc-400 bg-slate-500">
//                   <th className="border px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">Amount</th>
//                   <th className="border px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">Type</th>
//                   <th className="border px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">Remark</th>
//                   <th className="border px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">Date</th>
//                   <th className="border px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {transactions.length > 0 ? (
//                   transactions.map((transaction, index) => (
//                     <tr key={transaction.id} className={`border-b ${index % 2 === 0 ? 'bg-slate-600' : 'bg-gray-50'}`}>
//                       <td className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">{transaction.amount}</td>
//                       <td className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">{transaction.type}</td>
//                       <td className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">{transaction.remark}</td>
//                       <td className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">{transaction.date}</td>
//                       <td className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">
//                         <button 
//                           onClick={() => onEdit(transaction.id)} 
//                           className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 text-xs sm:text-sm mr-2"
//                         >
//                           Edit
//                         </button>
//                         <button 
//                           onClick={() => onDelete(transaction.id)} 
//                           className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 text-xs sm:text-sm"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan={5} className="border px-4 py-2 text-center text-gray-500">
//                       No transactions found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TransactionShow;

import { ErrorMessage, FormikProps } from "formik";
import ATMTextField from "../../Components/Atoms/ATM/ATMTextfield";
import { TransactionFormValue } from "../Add/AddTransactionWrapper";

type FormikProps = {
    values: {
        TransactionName: string;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isSubmitting: boolean;
}
type Props = {
    formikProps: FormikProps<TransactionFormValue>;
    heading: string;
    buttonName: string;
};

const TransactionFormLayout = ({ formikProps, heading, buttonName }: Props) => {
    const { values, handleChange, isSubmitting } = formikProps; 
    
    return (
        <div className="flex justify-center items-center h-screen bg-slate-500">
            <div className="w-full max-w-md p-6 bg-slate-600 text-gray-400 border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-center mb-6">{heading}</h2>

               
                <div className="mb-4">
                    <ATMTextField
                        label="Transaction Name"
                        name="transactionName"
                        placeholder="Enter your Transaction"
                        value={values.transactionName}
                        onChange={handleChange}
                        className="w-full"
                    />
                    <p className='text-red-400'><ErrorMessage name='transactionName' /></p>

                </div>

                <div>
                    <button
                        type="submit"
                        className="border rounded bg-blue-600 w-full h-12 p-2 font-light text-xl text-white"
                        disabled={isSubmitting}
                    >
                        {buttonName}
                    </button>
                </div>

            </div>
        </div>
    );
};
export default TransactionFormLayout