


import { useNavigate } from 'react-router-dom';
import { useGetTransactionQuery } from '../../Slice/TransactionSlice';

type Transaction = {
  id: number;
  categoryName: string;
  date: string;
  type: string;
  amount: number;
  remark: string;
};

type Props = {};

const TransactionHistory = (props: Props) => {
  const token = localStorage.getItem("token");
  console.log(token);

  const { data } = useGetTransactionQuery(token);
  console.log(data);

  const navigate = useNavigate();

  return (
    <div className='h-full w-full bg-slate-500 text-zinc-400 p-4'>
      <div className="p-6 max-w-4xl mx-auto">
        <div className='flex justify-between mt-10'>
          <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">Transactions</h2>
          <button className='border bg-gray-600 items-end mb-5 rounded p-2 w-[200px]'
           onClick={() => navigate("/layout/transaction")}>
            Add Transaction
          </button>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 bg-slate-700">
            <thead className="bg-gray-500">
              <tr>
                <th className="border border-gray-300 p-2 text-xs sm:text-sm">ID</th>
                <th className="border border-gray-300 p-2 text-xs sm:text-sm">Category Name</th>
                <th className="border border-gray-300 p-2 text-xs sm:text-sm">Date</th>
                <th className="border border-gray-300 p-2 text-xs sm:text-sm">Type</th>
                <th className="border border-gray-300 p-2 text-xs sm:text-sm">Amount</th>
                <th className="border border-gray-300 p-2 text-xs sm:text-sm">Remark</th>
                <th className="border border-gray-300 p-2 text-xs sm:text-sm">Actions</th> {/* New Actions Column */}
              </tr>
            </thead>
            <tbody>
              {data?.data?.map(transaction => (
                <tr key={transaction.id} className="hover:bg-slate-600">
                  <td className="border border-gray-300 p-2 text-xs sm:text-sm">{transaction.id}</td>
                  <td className="border border-gray-300 p-2 text-xs sm:text-sm">{transaction.categoryName}</td>
                  <td className="border border-gray-300 p-2 text-xs sm:text-sm">{transaction.date}</td>
                  <td className="border border-gray-300 p-2 text-xs sm:text-sm">{transaction.type}</td>
                  <td className={`border border-gray-300 p-2 text-xs sm:text-sm ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                    {transaction.amount}
                  </td>
                  <td className="border border-gray-300 p-2 text-xs sm:text-sm">{transaction.remark}</td>
                  <td className="border border-gray-300 p-2 text-xs sm:text-sm"> {/* New Actions Cell */}
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                      onClick={() => navigate(`/layout/transaction/edit/${transaction.id}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => {
                        // Handle the delete action here
                        console.log(`Deleting transaction with ID ${transaction.id}`);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;



