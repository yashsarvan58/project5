import React from 'react';

type Transaction = {
  id: number;
  amount: number;
  type: string;
  remark: string;
  date: string;
};

type Props = {
  transactions: Transaction[];
};

const TransactionShow: React.FC<Props> = ({ transactions }) => {
  return (
    <div className="w-1/2 mx-auto my-10 bg-white rounded-lg p-5 shadow-md">
      <h1 className="text-2xl text-center">Transactions</h1>
      <table className="min-w-full mt-5">
        <thead>
          <tr>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Remark</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b">
                <td className="border px-4 py-2">{transaction.amount}</td>
                <td className="border px-4 py-2">{transaction.type}</td>
                <td className="border px-4 py-2">{transaction.remark}</td>
                <td className="border px-4 py-2">{transaction.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="border px-4 py-2 text-center">
                No transactions found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionShow;
