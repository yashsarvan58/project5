

import React, { useState } from 'react';

type Props = {};

const AddCategories = (props: Props) => {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

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
  };

  const handleEditCategory = (index: number) => {
    setCategory(categories[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDeleteCategory = (index: number) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  return (
    <div className='bg-slate-100 items-center text-center h-screen flex justify-center '>
      <div className='h-[400px] w-[400px] flex flex-col p-5'>
        <label className='text-[30px] text-slate-500 pb-3'>Categories</label>

        <span className='flex place-items-center gap-2'>
          <input
            type="text"
            name='AddCategories'
            placeholder='Enter a category'
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className='border-2 w-[300px] h-10 rounded justify-center items-center text-center'
          />
          <button
            onClick={handleAddCategory}
            className='border-2 rounded bg-sky-400 h-[30px] w-[100px]'
          >
            {isEditing ? 'Update' : 'Add'}
          </button>
        </span>

        {error && <p className='text-red-500'>{error}</p>}

        <table className='mt-5 w-full border-2'>
          <thead>
            <tr>
              <th className='border-b'>Categories</th>
              <th className='border-b'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr key={index}>
                <td className='border-b'>{cat}</td>
                <td className='border-b'>
                  <button
                    onClick={() => handleEditCategory(index)}
                    className='mr-2 text-sky-500 border-2 p-1 w-20'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(index)}
                    className='text-red-500 border-2 p-1 w-20'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCategories;

