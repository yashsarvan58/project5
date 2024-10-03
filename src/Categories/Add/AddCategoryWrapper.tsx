import { useNavigate } from "react-router-dom";
import { useAddCategoryMutation } from "../../Slice/CategoriesSlice";
import { object, string } from "yup";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import CategoryFormLayout from "../Layout/CategoryFormLayout";

export type CategoryFormValue = {
  categoryname: string;
};

const AddCategoryFormWrapper = () => {
  const [addCategory] = useAddCategoryMutation();
  const navigate = useNavigate();

  const token = localStorage.getItem("Token");
  console.log("Tokensss: ", token);
  

  const initialvalues: CategoryFormValue = {
    categoryname: "",
  };

  const categoryValidation = object({
    categoryname: string().required("Category is required"),
  });

  const handleSubmit = (values: CategoryFormValue) => {
    const token = localStorage.getItem("Token");
    addCategory({ categoryData: values, token })
  .then((res: any) => {
    console.log("Response:", res);
    if (res.data?.status === "OK") {
      toast.success("Category added successfully");
      navigate("/layout/category-list");
    } else {
      toast.error(res.data.msg || "Failed to add category");
    }
  })
  .catch((err) => {
    toast.error("error");
    console.log("Error:", err);
  });

  };

  return (
    <Formik
      initialValues={initialvalues}
      validationSchema={categoryValidation}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, ...formikProps }: any) => (
        <Form onSubmit={handleSubmit}>
          <CategoryFormLayout
            heading={"Add Category"}
            buttonName="Add"
            formikProps={formikProps}
          />
        </Form>
      )}
    </Formik>
  );
};

export default AddCategoryFormWrapper;