
import React from 'react';

type Category = {
  id: number;
  name: string;
};

type ListCategoriesProps = {
  categories: Category[];
  onDelete: (id: number) => void; 
};


const ListCategories: React.FC<ListCategoriesProps> = ({ categories, onDelete }) => {
    
    

   
  return (
    <div className='p-5'>
      <table className='w-full border-collapse border border-gray-300'>
        <thead>
          <tr className='bg-gray-200'>
            <th className='border border-gray-300 p-2 text-left'>ID</th>
            <th className='border border-gray-300 p-2 text-left'>Category Name</th>
            <th className='border border-gray-300 p-2 text-left'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories?.data.map((category:any) => (
            <tr key={category._id} className='hover:bg-gray-100'>
              <td className='border border-gray-300 p-2'>{category._id}</td>
              <td className='border border-gray-300 p-2'>{category.categoryName}</td>
              <td className='border border-gray-300 p-2'>
                <button className='text-sky-500 mr-2 border-2 border-gray-300 p-1 rounded'>
                  Edit
                </button>
                <button
                  onClick={() => onDelete(category.id)} // Handle deletion
                  className='text-red-500 border-2 border-gray-300 p-1 rounded'
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {categories.length === 0 && (
            <tr>
              <td colSpan={3} className='text-center p-5'>
                No categories found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListCategories;



