import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const initialValues = {
  login: '',
  password: '',
};

const validationSchema = Yup.object({
  login: Yup.string().required('Required field'),
  password: Yup.string().required('Required field'),
});

const onSubmit = async (values, { setSubmitting, setFieldError }) => {
  try {
    // Sending request  
    const response = await axios.post('https://7ae54d75-8b54-427e-92f8-1c4b62d1cb93.mock.pstmn.io/security/auth', values);
    console.log('Ответ сервера:', response.data);
    // gettin token
    const token = response.data.jwt;

    
    console.log('Accepted token:', token);
  } catch (error) {
    
    console.error('Login error:', error.response.data);
    setFieldError('login', 'Wrong password or login');
    setFieldError('password', 'Wrong password or login');
  } finally {
    setSubmitting(false);
  }
};

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="login">Login:</label>
          <Field type="text" id="login" name="login" />
          <ErrorMessage name="login" component="div" />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <div>
          <button type="submit">Log In</button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
