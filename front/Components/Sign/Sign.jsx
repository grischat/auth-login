
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const initialValuesSignIn = {
  login: '',
  password: '',
};

const validationSchemaSignIn = Yup.object({
  login: Yup.string().required('Обязательное поле'),
  password: Yup.string().required('Обязательное поле'),
});

const onSubmitSignIn = (values, { setSubmitting }) => {
  console.log('Отправленные данные для входа:', values);
  setSubmitting(false);
};


const initialValuesSignUp = {
  username: '',
  email: '',
  password: '',
};

const validationSchemaSignUp = Yup.object({
  username: Yup.string().required('Обязательное поле'),
  email: Yup.string().email('Неверный формат email').required('Обязательное поле'),
  password: Yup.string().required('Обязательное поле'),
});

const onSubmitSignUp = (values, { setSubmitting }) => {
  // Здесь вы можете выполнить логику для регистрации
  console.log('Отправленные данные для регистрации:', values);
  setSubmitting(false);
};

const AuthenticationForm = () => {
  return (
    <div>
      <h2>Вход</h2>
      <Formik
        initialValues={initialValuesSignIn}
        validationSchema={validationSchemaSignIn}
        onSubmit={onSubmitSignIn}
      >
        <Form>
          <div>
            <label htmlFor="login">Логин:</label>
            <Field type="text" id="login" name="login" />
            <ErrorMessage name="login" component="div" />
          </div>

          <div>
            <label htmlFor="password">Пароль:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <div>
            <button type="submit">Войти</button>
          </div>
        </Form>
      </Formik>

      <h2>Регистрация</h2>
      <Formik
        initialValues={initialValuesSignUp}
        validationSchema={validationSchemaSignUp}
        onSubmit={onSubmitSignUp}
      >
        <Form>
          <div>
            <label htmlFor="username">Имя пользователя:</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Пароль:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <div>
            <button type="submit">Зарегистрироваться</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthenticationForm;
