
import React, { useState } from 'react';

type Props = {};

const AddCategories = (props: Props) => {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false); 

  const handleAddCategory = () => {
    if (!category) {
      setError('Category cannot be empty.');
      return;
    }

    if (categories.includes(category)) {
      setError('Category already exists.');
      return;
    }

    if (isEditing && editIndex !== null) {
      const updatedCategories = [...categories];
      updatedCategories[editIndex] = category;
      setCategories(updatedCategories);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setCategories([...categories, category]);
    }

    setCategory('');
    setError('');
    setIsModalVisible(false); 
  };

  const handleEditCategory = (index: number) => {
    setCategory(categories[index]);
    setIsEditing(true);
    setEditIndex(index);
    setIsModalVisible(true); 
  };

  const handleDeleteCategory = (index: number) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  return (
    <div className='bg-slate-100 flex items-center justify-center h-screen'>
      <div className='h-full w-full flex flex-col p-5 shadow-lg bg-slate-300 rounded-lg'>
        <label className='text-2xl text-slate-500 pb-3'>Categories</label><hr  className='pb-5'/>

        <div className='flex justify-end mb-3'>
          <button
            onClick={() => {
              setIsModalVisible(true);
              setIsEditing(false);
              setCategory(''); 
            }}
            className='border-2 rounded bg-sky-500 h-10 w-48 text-slate-600 font-semibold'
          >
            Add New Category
          </button>
        </div>

        {error && <p className='text-red-500 mt-2'>{error}</p>}

        <table className='mt-5 w-full border border-gray-300 rounded-lg'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border-b border-gray-300 p-2 text-left'>Categories Name</th>
              <th className='border-b border-gray-300 p-2 text-left'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr key={index} className='hover:bg-gray-100'>
                <td className='border-b border-gray-300 p-2'>{cat}</td>
                <td className='border-b border-gray-300 p-2'>
                  <button
                    onClick={() => handleEditCategory(index)}
                    className='mr-2 text-sky-500 border-2 border-gray-300 p-1 rounded'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(index)}
                    className='text-red-500 border-2 border-gray-300 p-1 rounded'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td colSpan={2} className='text-center pt-5 pr-20  text-gray-500'>
                  No categories added
                </td>
              </tr>
            )}
          </tbody>
        </table>

        
        {isModalVisible && (
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white p-5 rounded shadow-lg'>
              <h2 className='text-xl mb-3'>{isEditing ? 'Edit Category' : 'Add Category'}</h2>
              <input
                type="text"
                placeholder='Enter a category'
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className='border-2 border-gray-300 w-full h-10 rounded px-2 focus:outline-none focus:border-sky-400 mb-3'
              />
              <div className='flex justify-end'>
                <button
                  onClick={handleAddCategory}
                  className='border-2 rounded bg-sky-500 h-10 w-28 text-slate-600 font-semibold'
                >
                  {isEditing ? 'Update' : 'Add'}
                </button>
                <button
                  onClick={() => setIsModalVisible(false)}
                  className='ml-2 border-2 rounded bg-red-500 h-10 w-28 text-white'
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCategories;


