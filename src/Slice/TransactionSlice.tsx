import { ApiSlice } from "./ApiSlice";

export const TransactionSlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({

      addTransaction: builder.mutation({
        query: ({ transactionData, token }: any) => ({
          url: 'transaction/add-Transaction',
          method: 'POST',
          body: transactionData,
          headers: {"x-access-token":token},
          
        }),
        invalidatesTags:['transactions']
      }),
  
      getTransaction: builder.query({
        query: ({token}:any) => ({
          url: 'transaction/get-Transaction',
          method: 'GET',
          headers: {"x-access-token":token},
        }),
        providesTags: ['transactions']
      }),
  
      getSingleTransaction: builder.query({
        query: ({ token, id}: any) => ({
          url: `transaction/get-single/${id}`,
          method: 'GET',
          headers: {"x-access-token":token},
          
        }),
        providesTags: ['transactions']
      }),
  
      editTransaction: builder.mutation({
        query: ({ EditData, id, token }: any) => ({
          url: `/transaction/update-transaction/${id}`,
          method: 'PUT',
          body: EditData,
          headers: {"x-access-token":token},
          
        }),
        invalidatesTags: ['transactions']
      }),
  
      deleteTransaction: builder.mutation({
        query: ({token, id}: any) => ({
          url: `transaction/delete-Transaction/${id}`, // Adjust this endpoint based on your API
          method: 'DELETE',
          headers: {"x-access-token":token},
        }),
        invalidatesTags: ['transactions']
      }),
    }),
  
})

export const {useAddTransactionMutation, useGetTransactionQuery, useGetSingleTransactionQuery, useEditTransactionMutation, useDeleteTransactionMutation} = TransactionSlice 