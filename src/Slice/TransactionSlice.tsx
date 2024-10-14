import { ApiSlice } from "./ApiSlice";

export const TransactionSlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({

      addTransaction: builder.mutation({
        query: ({ transactionData, token }: any) => ({
          url: 'transaction/add-Transaction',
          method: 'POST',
          body: transactionData,
          headers: token,
          
        }),
        invalidatesTags: ['transaction']
      }),
  
      getTransaction: builder.query({
        query: ({token}:any) => ({
          url: 'transaction/get-Transaction',
          method: 'GET',
          headers:token,
          
        }),
      }),
  
      getSingleTransaction: builder.query({
        query: ({ id}: any) => ({
          url: `transaction/getSingleTransaction/${id}`,
          method: 'GET',
          
        }),
        providesTags: ['transaction']
      }),
  
      editTransaction: builder.mutation({
        query: ({ transactionData, id, }: any) => ({
          url: `transaction/update-Transaction/${id}`,
          method: 'PUT',
          body: transactionData,
          
        }),
        invalidatesTags: ['transaction']
      }),
  
      deleteTransaction: builder.mutation({
        query: (id: number) => ({
          url: `transaction/delete-Transaction/${id}`, // Adjust this endpoint based on your API
          method: 'DELETE',
        }),
        invalidatesTags: ['transaction']
      }),
    }),
  
})

export const {useAddTransactionMutation, useGetTransactionQuery, useGetSingleTransactionQuery, useEditTransactionMutation, useDeleteTransactionMutation} = TransactionSlice