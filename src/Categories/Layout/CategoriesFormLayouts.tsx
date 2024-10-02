// import React from 'react';

// type CategoriesFormProps = {
//   category: string;
//   setCategory: (value: string) => void;
//   handleSubmit: () => void; // Handles the form submission
// };

// const CategoriesForm: React.FC<CategoriesFormProps> = ({
//   category,
//   setCategory,
//   handleSubmit,
// }) => {
//   return (
//     <div className="bg-white p-5 rounded shadow-lg max-w-md mx-auto">
//       <h2 className="text-xl mb-3">Add Category</h2>
//       <input
//         type="text"
//         placeholder="Enter category name"
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//         className="border-2 border-gray-300 w-full h-10 rounded px-2 focus:outline-none focus:border-sky-400 mb-3"
//       />
//       <div className="flex justify-end">
//         <button
//           onClick={handleSubmit}  // Call the submit handler
//           className="border-2 rounded bg-sky-500 h-10 w-28 text-white font-semibold"
//         >
//           Add
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CategoriesForm;

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type CategoriesFormProps = {
  handleSubmit: (values: { categoryName: string }) => void;
};

const CategoriesForm: React.FC<CategoriesFormProps> = ({ handleSubmit }) => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      categoryName: '',
    },
    validationSchema: Yup.object({
      categoryName: Yup.string().required('Category name is required'),
    }),
    onSubmit: (values) => {
      handleSubmit(values); // Call the submit handler passed as a prop
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white p-5 rounded shadow-lg max-w-md mx-auto">
      <h2 className="text-xl mb-3">Add Category</h2>

      <div className="mb-3">
        <input
          type="text"
          name="categoryName"
          placeholder="Enter category name"
          value={formik.values.categoryName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`border-2 w-full h-10 rounded px-2 focus:outline-none focus:border-sky-400 ${
            formik.touched.categoryName && formik.errors.categoryName ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {formik.touched.categoryName && formik.errors.categoryName ? (
          <div className="text-red-500 mt-1 text-sm">{formik.errors.categoryName}</div>
        ) : null}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="border-2 rounded bg-sky-500 h-10 w-28 text-white font-semibold"
          disabled={formik.isSubmitting} // Disable the button while submitting
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default CategoriesForm;


