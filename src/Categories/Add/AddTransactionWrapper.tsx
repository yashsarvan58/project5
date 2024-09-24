import React, { useEffect, useState } from 'react';

import TransactionShow from './AddTransaction';

const TransactionShowWrapper = () => {
  const [transactions, setTransactions] = useState([ 
{id:1,date:11/22/8888,remark:"kjhgf",type:"online",amount:3000}

  ]);

  // useEffect(() => {
  //   const getTransactions = async () => {
  //     try {
  //       const res = await fetchTransactions(); // Assuming fetchTransactions returns a promise
  //       setTransactions(res.data); // Adjust based on your API response structure
  //     } catch (error) {
  //       console.error('Error fetching transactions:', error);
  //     }
  //   };

  //   getTransactions();
  // }, []);

  return <TransactionShow transactions={transactions} />;
};

export default TransactionShowWrapper;
