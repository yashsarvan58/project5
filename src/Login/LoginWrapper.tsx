
// import { object, string } from 'yup';
// import Login from './Login';
// import { Form, Formik, FormikHelpers } from 'formik';
// import { useLoginMutation } from '../Slice/AuthSlice';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { useEffect } from 'react';

// const LoginWrapper = () => {
//     const navigate = useNavigate();
//     const [login] = useLoginMutation();

//     const initialValues = {
//         email: "",
//         password: "",
//         role: "admin",
//     };

//     const validationSchema = object({
//         email: string().required("Please enter your email"),
//         password: string().required("Please enter your password"),
//     });

//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         if (token) { 
//             navigate("/");
        
//         }
//     }, [navigate]);

//     const handleSubmit = (values: any, { setSubmitting }: FormikHelpers<any>) => {
//         login(values)
//             .then((res) => {
//                 if (res.data.status) {
//                     localStorage.setItem("token", res.data.token);
//                     toast.success("Login successful");
//                     navigate("/Layout/home");
//                 } else {
//                     toast.error("Login failed: No token received");
//                 }
//             })
//             .catch((error) => {
//                 toast.error("Login failed: " + error.message);
//             })
//             .finally(() => {
//                 setSubmitting(false);
//             });
//     };

//     return (
//         <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//         >
//             {(formikProps) => (
//                 <Form>
//                     <Login formikProps={formikProps} />
//                 </Form>
//             )}
//         </Formik>
//     );
// };

// export default LoginWrapper;  


import { object, string } from 'yup';
import Login from './Login';
import { Form, Formik, FormikHelpers } from 'formik';
import { useLoginMutation } from '../Slice/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const LoginWrapper = () => {
    const navigate = useNavigate();
    const [login] = useLoginMutation();

    const initialValues = {
        email: "",
        password: "",
        role: "admin",
    };

    const validationSchema = object({
        email: string().required("Please enter your email"),
        password: string().required("Please enter your password"),
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) { 
            navigate("/"); // User is already logged in, navigate to home
        } else {
            navigate("/login"); // No token, navigate to login
        }
    }, [navigate]);

    const handleSubmit = (values: any, { setSubmitting }: FormikHelpers<any>) => {
        login(values)
            .then((res) => {
                if (res.data.status) {
                    localStorage.setItem("token", res.data.token);
                    toast.success("Login successful");
                    navigate("/Layout/home");
                } else {
                    toast.error("Login failed: No token received");
                }
            })
            .catch((error) => {
                toast.error("Login failed: " + error.message);
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {(formikProps) => (
                <Form>
                    <Login formikProps={formikProps} />
                </Form>
            )}
        </Formik>
    );
};

export default LoginWrapper; 



