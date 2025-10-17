import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

const mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export const withAuthRedirect = (Component) => {

  const RedirectComponent = (props) => {
<<<<<<< HEAD
    // debugger
    console.log("isAuth: " + props.isAuth)
    if (props.isAuth === 1) return <Navigate to={"/loginFinal"} />
=======
    if (!props.isAuth) return <Navigate to={"/loginFinal"} />
>>>>>>> fix-78

    return <Component {...props} />
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);//коннектим к возвращаемому компоненту isAuth из стейта, и теперь нам не надо прокидывать isAuth в каждый компонент

  return ConnectedAuthRedirectComponent;
}