const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
  postsData: [
    { id: 1, postText: "Hi, how are you?", likesCount: 10 },
    { id: 2, postText: "It's my first post", likesCount: 12 },
  ],
  newPostText: "Hello, enter your text!!!",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postsData: [
          ...state.postsData,
          {
            id: 5,
            postText: state.newPostText,
            likesCount: 5,
          },
        ],
        newPostText: "",
      };
    }

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };

    case SET_USER_PROFILE:
      return {
        ...state, profile: action.profile
      };

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export default profileReducer;
