// import React from "react";
// import styles from "./Login.module.scss";
// import { Field, reduxForm } from "redux-form";
// import { loginThunkCreator } from "../../redux/auth-reducer";
// import { connect } from "react-redux";
// import { Navigate } from "react-router-dom";

// const LoginForm = (props) => {
//   // debugger
//   // console.log(props.handleSubmit)
//   return (
//     <form onSubmit={props.handleSubmit}>
//     {/* <form> */}
//       <div className={styles.inputWrapper}>
//         <Field placeholder="login" name={"login"} component={"input"} />
//       </div>
//       <div className={styles.inputWrapper}>
//         <Field placeholder="password" name={"password"} component={"input"} />
//       </div>
//       <div className={styles.inputCheckboxWrapper}>
//         <Field type="checkbox" name={"rememberMe"} component={"input"} /> <span>запомнить меня</span>
//       </div>
//       <button>Залогиниться</button>
//     </form>
//   );
// };

// const LoginReduxForm = reduxForm({
//   form: 'login'
// }) (LoginForm)

// const Login = (props) => {
//   const onSubmit = (formData) => {
//     // Здесь обрабатываем данные формы
//     console.log('Login data:', formData);
//     props.loginThunkCreator(formData.login, formData.password, formData.rememeberMe);
//   };

//   if (props.isAuth) return <Navigate to={"/"} />

<<<<<<< HEAD
// export default Login;
=======
//   return (
//     <>
//       <div className={styles.loginPage}>
//         <h1>Login</h1>
//         <LoginReduxForm onSubmit={onSubmit} />
//       </div>
//     </>
//   );
// };

// const mapStateToProps = (state) => ({
//   isAuth: state.auth.isAuth
// })

// export default connect(mapStateToProps, {loginThunkCreator})(Login);
>>>>>>> fix-78
