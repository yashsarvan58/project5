

import { object, string } from 'yup';
import Login from './Login';
import { Form, Formik, FormikHelpers } from 'formik';
import { useLoginMutation } from '../Slice/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginWrapper = () => {
    const navigate = useNavigate();
    const [login] = useLoginMutation();

    const initialValues = {
        email: "",
        password: "",
        adminCode: "ADMIN1234",
    };

    const validationSchema = object({
        email: string().required("Please enter your email"),
        password: string().required("Please enter your password"),
    });

    const handleSubmit = (values: any, { setSubmitting }: FormikHelpers<any>) => {
        login(values)
            .then((res) => {
                if (res.data && res.data.token) {
                    localStorage.setItem("token", res.data.token);
                    toast.success("Login successful");
                    navigate("/Layout");
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

