import React from "react";
import styles from "./LoginFinal.module.scss";
import { Form, Field } from "react-final-form";

const LoginForm = (props) => {
// debugger
  const onSubmit = (values) => {
    console.log("Form values:", values);
    // Здесь будет ваша логика отправки формы
  };
  
  return (
    <Form onSubmit={onSubmit}
          render={({handleSubmit, submitting}) => (
            <form onSubmit={handleSubmit}>
              <div className={styles.inputWrapper}>
                <Field 
                  placeholder="login" 
                  name="login"
                  type="text"
                  component="input" 
                />
              </div>
              <div className={styles.inputWrapper}>
                <Field 
                  placeholder="password" 
                  name="password" 
                  type="password" 
                  component="input"
                  autoComplete="current-password"
                />
              </div>
              <label htmlFor="checkbox" className={styles.inputCheckboxWrapper}>
                <Field 
                  id="checkbox"
                  type="checkbox" 
                  name="rememberMe" 
                  component="input"
                /> <span>запомнить меня</span>
              </label>
              <button type="submit" disabled={submitting}>Залогиниться</button>
            </form>
          )}
     />
  );
};

const LoginFinal = (props) => {
  return (
    <>
      <div className={styles.loginPage}>
        <h1>Login-final</h1>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginFinal;
