
import { object, string } from 'yup'
import Login from './Login'
import { Form, Formik, FormikHelpers } from 'formik'
import { useLoginMutation } from '../Slice/AuthSlice'
import {  useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

 


const LoginWrapper= () => {
const navigate=useNavigate()

const [ login]=useLoginMutation()
    const intialValue = {
        email: "",
        password: "",
        adminCode:"ADMIN1234",
      }
      const ValidationSchema = object({
        email: string().required("Email is a required feild"),
        password: string().required("Password is a required feild")
      
      })
      
      const handleSubmit = (values: any,{setSubmitting}:FormikHelpers<any>) => {
     login(values).then((res)=>{
      localStorage.setItem("token",res.data.token)
     
        toast("Login succesfully ")
      
      console.log(res)
 
      navigate("/home")
      
      setSubmitting(false)
        console.log(res)   
  
     })
        console.log(values);

      }
    return (

      <Formik
        initialValues = {intialValue}
        validationSchema = {ValidationSchema}
        onSubmit =  {handleSubmit}
      >
        {
          (formikProps) => {
          
            return (

              <Form> 
                <Login formikProps={formikProps} />     
              </Form>
            )
          }
        }

      </Formik>

    )
  }
  export default LoginWrapper  