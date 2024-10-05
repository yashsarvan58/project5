
import React from 'react';

type Transaction = {
  id: number;
  date: string;
  description: string;
  amount: number;
};

type Props = {};

const TransactionHistory = (props: Props) => {
  const transactions: Transaction[] = [
    { id: 1, date: '2024-09-01', description: 'Payment to Supplier A', amount: -200 },
    { id: 2, date: '2024-09-05', description: 'Invoice from Client B', amount: 500 },
    { id: 3, date: '2024-09-10', description: 'Payment for Service C', amount: -150 },
    { id: 4, date: '2024-09-15', description: 'Refund from Supplier D', amount: 100 },
  ];

  return (
    <div className='h-full w-full bg-slate-500 text-zinc-400 p-4'>
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">Transaction History</h2>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 bg-slate-700">
            <thead className="bg-gray-500">
              <tr>
                <th className="border border-gray-300 p-2 text-xs sm:text-sm">ID</th>
                <th className="border border-gray-300 p-2 text-xs sm:text-sm">Date</th>
                <th className="border border-gray-300 p-2 text-xs sm:text-sm">Description</th>
                <th className="border border-gray-300 p-2 text-xs sm:text-sm">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id} className="hover:bg-slate-600">
                  <td className="border border-gray-300 p-2 text-xs sm:text-sm">{transaction.id}</td>
                  <td className="border border-gray-300 p-2 text-xs sm:text-sm">{transaction.date}</td>
                  <td className="border border-gray-300 p-2 text-xs sm:text-sm">{transaction.description}</td>
                  <td className={`border border-gray-300 p-2 text-xs sm:text-sm ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                    {transaction.amount}
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

