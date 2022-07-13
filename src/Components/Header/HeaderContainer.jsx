import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import Header from "./Header";

const HeaderContainer = (props) => {
  axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      }
    )
    .then((response) => {
      if(response.data.resultCode === 0){
        let {id, login, email} = response.data.data
        props.setAuthUserData(id, login, email);
      }
    });

  return <Header {...props} />;
};

let mapStateToProps = (state) => {
  return {
      isAuth: state.auth.isAuth,
      login: state.auth.login
  };
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
