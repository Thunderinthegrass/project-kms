import React from "react";
import styles from "./LoginFinal.module.scss";
import { Form, Field } from "react-final-form";
import { composeValidators, isCheckedCheckbox, maxLengthCreator, requiredField } from "../../utils/validators";
import { Input } from "../common/FormControls/FormControls";
import { loginThunkCreator } from "../../redux/auth-reducer";

const LoginForm = (props) => {
// debugger
  const onSubmit = (values, form) => {
    // console.log("Form values:", values);
    loginThunkCreator(values.login, values.password, values.rememberMe)
    // form.reset();
    // alert('Все отправлено!!1')
    // Здесь будет ваша логика отправки формы
  };
  
  return (
    <Form onSubmit={onSubmit}
          render={({handleSubmit, submitting}) => (
            <form onSubmit={handleSubmit}>
              <label className={styles.inputWrapper}>
                <Field 
                  placeholder="login" 
                  name="login"
                  type="text"
                  component={Input} 
                  validate={composeValidators(requiredField, maxLengthCreator(30))}
                />
              </label>
              <label className={styles.inputWrapper}>
                <Field 
                  placeholder="password" 
                  name="password" 
                  type="password" 
                  component={Input}
                  autoComplete="current-password"
                  validate={composeValidators(requiredField, maxLengthCreator(30))}
                />
              </label>
              <label htmlFor="checkbox" className={styles.inputCheckboxWrapper}>
                <Field 
                  id="checkbox"
                  type="checkbox" 
                  name="rememberMe" 
                  component={Input}
                  validate={isCheckedCheckbox("Это надо нажать")}
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
