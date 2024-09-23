import React from 'react'

type Props = {}

const AddTransaction = (props: Props) => {
  return (
    <div className="w-1/3 mx-auto my-10 bg-white rounded-lg p-5 shadow-md backdrop-filter backdrop-blur-sm">
    <h1 className="text-2xl text-center">Add Transactions</h1>
    <div className="flex flex-col gap-5">
      <div>
        <label className="block">Amount:</label>
        <input
          className="border p-2 rounded"
          name="amount"
          placeholder="Enter the amount"
        />
      </div>
      <div>
        <label className="block">Type:</label>
        <select className="border p-2 rounded" name="type">
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>
      <div>
        <label className="block">Remark:</label>
        <input
          className="border p-2 rounded"
          name="remark"
          placeholder="Enter a remark"
        />
      </div>
      <div>
        <label className="block">Date:</label>
        <input
          className="border p-2 rounded"
          name="date"
          type="date"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700"
      >
        Add Transaction
      </button>
    </div>
  </div>
  )
}