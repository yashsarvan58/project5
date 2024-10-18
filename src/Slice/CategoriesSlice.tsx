import { ApiSlice } from "./ApiSlice";

export const CategorySlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({

      addCategory: builder.mutation({
        query: ({ categoryData }: any) => ({
          url: 'category/add-category',
          method: 'POST',
          body: categoryData,
        }),
       invalidatesTags:['categories']
      }),
  
      getCategory: builder.query({
        query: ({ categoryData}: any) => ({
          url: 'category/get-category',
          method: 'GET',
          body: categoryData
        }), 
        providesTags:['categories']
      }),
  
      getSingleCategory: builder.query({
        query: ({id,token}) => ({
          url: `category/getSingleCategory/${id}`,
          method: 'GET',
          headers:{"x-access-token":token}
        }),
       providesTags:['categories']
      }),
  
      editCategory: builder.mutation({
        query: ({ id,categoryData ,token }: any) => ({
          url: `category/update-category/${id}`,
          method: 'PATCH',
          body: categoryData,
          headers:{"x-access-token":token}
        }),
       invalidatesTags:['categories']
      }),
  
      deleteCategory: builder.mutation({
        query: (id: number) => ({
          url: `category/delete-category/${id}`, // Adjust this endpoint based on your API
          method: 'DELETE',
        }),
       invalidatesTags:['categories']
      }),
    }),
  
})

export const {useAddCategoryMutation, useGetCategoryQuery, useGetSingleCategoryQuery, useEditCategoryMutation, useDeleteCategoryMutation} = CategorySlice