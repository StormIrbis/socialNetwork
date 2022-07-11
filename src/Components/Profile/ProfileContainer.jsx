import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";

function ProfileContainer(props) {
  let { id } = useParams();
  
  if (!id) {
    id = 2;
  }

  axios
    .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
    .then((response) => {
      props.setUserProfile(response.data);
    });

  return <Profile {...props} profile={props.profile} />;
};

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
