

// import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link, useNavigate } from "react-router-dom";

// const TransactionListing = ({ data, onDelete }: any) => {
//   const navigate = useNavigate();

//   return (
//     <div className="flex justify-center items-center min-h-screen text-gray-400 bg-slate-500 p-4">
//       <div className="w-full max-w-4xl p-6 bg-slate-600 border border-gray-200 rounded-lg shadow-md">
//         <div className="flex flex-col md:flex-row justify-between items-center mb-6">
//           <h2 className="text-xl font-semibold mb-4 md:mb-0">Transaction</h2>

//           <button
//             onClick={() => {
//               navigate("/layout/transaction-listing");
//             }}
//             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//           >
//             Add Transaction
//           </button>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full table-auto border bg-slate-500 text-sm">
//             <thead className="border">
//               <tr className="text-slate-600 text-center">
//                 <th className="py-2 px-4 border-b">Transaction</th>
//                 <th className="py-2 px-4 border-b">Action</th>
//               </tr>
//             </thead>
//             <tbody className="text-slate-900 text-center bg-slate-400">
//               {data?.data.length > 0 ? (
//                 data?.data.map((transaction: any) => (
//                   <tr key={transaction._id}>
//                     <td className="py-2 px-4 border-b">{transaction.transactionName}</td>
//                     <td className="py-2 px-4 border-b flex justify-center gap-2">
//                       <Link to={`edit-Transaction/${transaction._id}`}>
//                         <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
//                           <FontAwesomeIcon icon={faEdit} />
//                         </button>
//                       </Link>
//                       <button
//                         className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
//                         onClick={() => onDelete(transaction._id)}
//                       >
//                         <FontAwesomeIcon icon={faTrash} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={2} className="text-center py-4">
//                     Loading...
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TransactionListing;