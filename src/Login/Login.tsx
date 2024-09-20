import { ErrorMessage, FormikProps} from "formik"

type Props = {formikProps: FormikProps<any>}


const Login = ({formikProps}: Props) => {
  console.log(formikProps)

const {values, setFieldValue} = formikProps


  return (

<div className=' h-screen flex justify-center flex-col items-center gap-10 m-auto bg-cover '>


<div className='border-2  bg-slate-300 rounded-lg shadow-lg w-[500px] h-[400px] p-20  gap-10 '>
     
      <h1 className="text-center text-2xl text-red-700 mb-2 ">Login</h1>
      <hr className="mb-7" />
      
 
<  label className="flex items-baseline text-gray-700"></label>

  <div className=''>   
     <input type="text"
        className=' p-1  border-2 border-gray-300 rounded w-full'
         placeholder='email'
         value={values.email}
         onChange={(e)=>setFieldValue("email",e.target.value)}
   />
   <p className="text-red-500"> <ErrorMessage name= "email"/></p>
  </div>
       
    <label className="flex items-baseline text-gray-700">Password</label>
  <div>
    <input type="password"
          className='border-2 border-gray-300 rounded p-1 w-full'
           placeholder='password'
           value={values.password}
           onChange={(e)=>setFieldValue("password", e.target.value)}
     />
     <p className="text-red-500"><ErrorMessage name= "password"/></p>
  </div>
  
  <div>
    <button type='submit' className='border-2 rounded bg-blue-500 mt-2 w-full p-1'>Login</button>
  </div>
  </div>
</div>


  )
}

export default Login