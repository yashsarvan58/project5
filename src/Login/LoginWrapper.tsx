
import { object, string } from 'yup'
import Login from './Login'
import { Form, Formik } from 'formik'
import { useLoginMutation } from '../Slice/AuthSlice'


const LoginWrapper= () => {
const [ login]=useLoginMutation()
    const intialValue = {
        email: "",
        password: ""
      }
      const ValidationSchema = object({
        email: string().required("Email is a required feild"),
        password: string().required("Password is a required feild")
      
      })
      
      const handleSubmit = (values: any) => {
     login(values).then((res)=>{
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
            console.log(formikProps)
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