const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postsData: [
    { id: 1, postText: "Hi, how are you?", likesCount: 10 },
    { id: 2, postText: "It's my first post", likesCount: 12 },
  ],
  newPostText: "Hello, enter your text!!!",
};

const profileReducer = (state = initialState, action) => {

  let stateCopy = { ...state, postsData: [...state.postsData] };
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        postText: state.newPostText,
        likesCount: 5,
      };
      
      stateCopy.postsData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT:
     
      stateCopy.newPostText = action.newText;
      return stateCopy;

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

export default profileReducer;
