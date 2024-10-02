// import React, { useState } from 'react';
// import CategoriesFormLayouts from './CategoriesFormLayouts'; // Import the UI component


// const CategoriesFormWrapper = () => {
//   const [category, setCategory] = useState('');

//   return (
//     <div>
  
//       <CategoriesFormLayouts
//         category={category}
//         setCategory={setCategory}
//       />
     
//     </div>
//   );
// };

// export default CategoriesFormWrapper;


import React, { useState } from 'react';
import CategoriesForm from '../../Categories/Layout/CategoriesFormLayouts';
import { useAddCategoryMutation } from '../../Slice/CategoriesSlice'; // Redux Toolkit slice

const CategoriesFormWrapper: React.FC = () => {
  const [addCategory, { isLoading }] = useAddCategoryMutation(); // Mutation hook
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State to hold errors

  const handleAddCategory = async (values: { categoryName: string }) => {
    try {
      // Call the API to add the category
      await addCategory({ categoryName: values.categoryName }).unwrap();
      alert('Category added successfully');
    } catch (error) {
      // Handle any errors during the API call
      console.error('Failed to add category: ', error);
      setErrorMessage('Failed to add category. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <CategoriesForm handleSubmit={handleAddCategory} />

      {isLoading && <div className="text-center mt-3 text-gray-600">Adding category...</div>}
      {errorMessage && <div className="text-center mt-3 text-red-500">{errorMessage}</div>}
    </div>
  );
};

export default CategoriesFormWrapper;


