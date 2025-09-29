import React from "react";
import styles from "./Login.module.scss";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form>
      <div className={styles.inputWrapper}>
        <Field placeholder="login" name={"login"} component={"input"} />
      </div>
      <div className={styles.inputWrapper}>
        <Field placeholder="password" name={"password"} component={"input"} />
      </div>
      <div className={styles.inputCheckboxWrapper}>
        <Field type="checkbox" name={"checkbox"} component={"input"} /> <span>запомнить меня</span>
      </div>
      <button>Залогиниться</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login'
}) (LoginForm)

const Login = (props) => {
  return (
    <>
      <div className={styles.loginPage}>
        <h1>Login</h1>
        <LoginReduxForm />
      </div>
    </>
  );
};

export default Login;
