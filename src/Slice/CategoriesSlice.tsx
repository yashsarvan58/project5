import { ApiSlice } from "./ApiSlice";

export const CategorySlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({

      addCategory: builder.mutation({
        query: ({ categoryData,  id }: any) => ({
          url: 'category/add-category',
          method: 'POST',
          body: categoryData,
         
        }),
        invalidatesTags: ['category']
      }),
  
      getCategory: builder.query({
        query: () => ({
          url: 'category/get-category',
          method: 'GET',
          
        }), 
      }),
  
      getSingleCategory: builder.query({
        query: (id) => ({
          url: `category/getSingleCategory/${id}`,
          method: 'GET',
          
        }),
        providesTags: ['category']
      }),
  
      editCategory: builder.mutation({
        query: ({ categoryData, id, }: any) => ({
          url: `category/update-category/${id}`,
          method: 'PATCH',
          body: categoryData
        }),
        invalidatesTags: ['category']
      }),
  
      deleteCategory: builder.mutation({
        query: (id: number) => ({
          url: `category/delete-category/${id}`, // Adjust this endpoint based on your API
          method: 'DELETE',
        }),
        invalidatesTags: ['category']
      }),
    }),
  
})

export const {useAddCategoryMutation, useGetCategoryQuery, useGetSingleCategoryQuery, useEditCategoryMutation, useDeleteCategoryMutation} = CategorySlice