import React from "react";
import styles from "./LoginFinal.module.scss";
import { Form, Field } from "react-final-form";
import { maxLengthHandle, requiredField, requiredFieldCheckbox } from "../../utils/validators/validators";
import Input from "../common/formsControls/FormsControls";
import { loginThunkCreator } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

// const maxLength10 = maxLengthHandle(10);

const LoginForm = (props) => {
// debugger
  const onSubmit = (values) => {
    console.log("Form values:", values);
    // Здесь будет ваша логика отправки формы
    props.login(values.login, values.password, values.rememeberMe)
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
                  component={Input}
                  validate={requiredField}
                />
              </div>
              <div className={styles.inputWrapper}>
                <Field 
                  placeholder="password" 
                  name="password" 
                  type="password" 
                  component={Input}
                  autoComplete="current-password"
                  validate={maxLengthHandle(20)}
                />
              </div>
              <label htmlFor="checkbox" className={styles.inputCheckboxWrapper}>
                <Field 
                  id="checkbox"
                  type="checkbox" 
                  name="rememberMe" 
                  component={Input}
                  validate={requiredFieldCheckbox}
                /> <span>запомнить меня</span>
              </label>
              <button type="submit" disabled={submitting}>Залогиниться</button>
            </form>
          )}
     />
  );
};

const LoginFinal = (props) => {

  if (props.isAuth) return <Navigate to={"/"} />
  return (
    <>
      <div className={styles.loginPage}>
        <h1>Login-final</h1>
        <LoginForm login={props.loginThunkCreator} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginThunkCreator})(LoginFinal);//вот эта строка решила все

// export default LoginFinal;
