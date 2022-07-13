const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  login: null,
  email: null,  
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.userData,
        isAuth: true
      };
    }

    default:
      return state;
  }
};

export const setAuthUserData = (id, login, email) => {
  return {
    type: SET_USER_DATA,
    userData: { id, login, email },
  };
};

export default authReducer;
