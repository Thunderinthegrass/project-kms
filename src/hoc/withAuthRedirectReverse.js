import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

const mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export const withAuthRedirectReverse = (Component) => {

  const RedirectComponent = (props) => {
    // debugger
    console.log("isAuth: " + props.isAuth)
    if (props.isAuth === 0) return <Navigate to={"/"} />

    return <Component {...props} />
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);//коннектим к возвращаемому компоненту isAuth из стейта, и теперь нам не надо прокидывать isAuth в каждый компонент

  return ConnectedAuthRedirectComponent;
}