import { ApiSlice } from "./ApiSlice";

export const CategorySlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({

      addCategory: builder.mutation({
        query: ({ categoryData }: { categoryData: any }) => ({
          url: 'category/add-category',
          method: 'POST',
          body: categoryData,
        }),
      }),
  
      getCategory: builder.query({
        query: () => ({
          url: 'category/get-category',
          method: 'GET',
        }),
      }),
  
      getSingleCategory: builder.query({
        query: (id: number) => ({
          url: `category/getSingleCategory/${id}`,
          method: 'GET',
        }),
      }),
  
      editCategory: builder.mutation({
        query: ({ categoryData, id }: { categoryData: any; id: number }) => ({
          url: `category/update-category/${id}`,
          method: 'PUT',
          body: categoryData,
        }),
      }),
  
      deleteCategory: builder.mutation({
        query: (id: number) => ({
          url: `category/delete-category/${id}`, // Adjust this endpoint based on your API
          method: 'DELETE',
        }),
      }),
    }),
  
})

export const {useAddCategoryMutation, useGetCategoryQuery, useGetSingleCategoryQuery, useEditCategoryMutation, useDeleteCategoryMutation} = CategorySlice