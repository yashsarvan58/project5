import React from 'react';
import ListCategories from './ListCategories';
import {
    useGetCategoryQuery,
  useDeleteCategoryMutation,
} from '../../Slice/CategoriesSlice'; // Ensure you have these hooks set up
import { Link } from 'react-router-dom';

const 
ListCategoriesWrapper: React.FC = () => {
  const { data: categories = [], error, isLoading } = useGetCategoryQuery() // Fetch categories
  const [deleteCategory] = useDeleteCategoryMutation(); // Hook to delete a category


  const handleDeleteCategory = (id: number) => {
    deleteCategory(id) // Pass the ID of the category to delete
      .unwrap()
      .then(() => {
        console.log('Category deleted successfully');
      })
      .catch((error) => {
        console.error('Failed to delete category: ', error);
      });
  };

  // Conditional rendering for loading, error, and the categories list
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories.</div>;

  return (
    <div className='bg-gray-100 min-h-screen p-5'>
      <h1 className='text-xl font-bold mb-4'>Categories List</h1>
      <Link to={"/add"}>
      <button
        className='border-2 rounded bg-sky-500 h-10 w-48 text-white font-semibold mb-5'
      >
        Add New Category
      </button>
      </Link>

      <ListCategories
        categories={categories} // Pass categories to the ListCategories component
        onDelete={handleDeleteCategory} // Pass delete handler
      />

     
    </div>
  );
};

export default ListCategoriesWrapper;


