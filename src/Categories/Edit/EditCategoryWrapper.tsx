

import { useNavigate, useParams } from "react-router-dom";
import { useEditCategoryMutation, useGetSingleCategoryQuery } from "../../Slice/CategoriesSlice";
import { object, string } from "yup";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import CategoryFormLayout from "../Layout/CategoryFormLayout";

export type CategoryFormValue = {
    categoryName: string | null;
};

const EditCategoryWrapper = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem("Token")
    const {id} = useParams()
    const {data} = useGetSingleCategoryQuery({id,token})
    console.log(data,'categorydata')
    const [editCategory] = useEditCategoryMutation()

    const initialValues = {
        categoryName: data?.data?.categoryName
    }
    const categoryValidation = object({
        categoryName: string().required('Name is required'),
    });

    const handleSubmit = (values: CategoryFormValue) => {
        console.log(values,'values')
        editCategory({id,categoryData: values , token})
        console.log(id,'id')
        .then((res: any)=> {
           if(res.data.msg){
            toast.success("Category edited successfully")
           }
           navigate("/layout/category-list")
        }).catch((err)=> {
            toast.error(err)
        })

    };

    return (
        <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={categoryValidation} 
        onSubmit={handleSubmit}
        >
            {({ handleSubmit, ...formikProps }: any) =>
                <Form onSubmit={handleSubmit}>
                    < CategoryFormLayout heading={"Edit Category"} buttonName="Edit" formikProps={formikProps} />
                </Form>
            }
        </Formik>
    )
}

export default EditCategoryWrapper

