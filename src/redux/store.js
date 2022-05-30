import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, postText: "Hi, how are you?", likesCount: 10 },
        { id: 2, postText: "It's my first post", likesCount: 12 },
      ],
      newPostText: "Hello, your text!!!",
    },

    messagesPage: {
      dialogsData: [
        { id: 1, name: "Aleksandr" },
        { id: 2, name: "Aleksey" },
        { id: 3, name: "Anatoly" },
        { id: 4, name: "Andrey" },
        { id: 5, name: "Anton" },
        { id: 6, name: "Arkady" },
        { id: 7, name: "Artem" },
        { id: 8, name: "Artur" },
      ],

      messagesData: [
        { id: 1, messageText: "Hi" },
        { id: 2, messageText: "Hi, my name is Serhii" },
        { id: 3, messageText: "Yo!" },
        { id: 4, messageText: "Yo!" },
        { id: 5, messageText: "Yo!" },
        { id: 6, messageText: "Yo!" },
      ],
    },

    sideBar: {
      sideBarData: [
        {
          id: 1,
          name: "Aleksandr",
          image:
            "https://gravatar.com/avatar/1f82b0492a0a938288c2d5b70534a1fb?s=400&d=robohash&r=x",
        },
        {
          id: 2,
          name: "Aleksey",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCX5KNL5ufvh9hO-M2I83ECM4a6x9RxRm8-TlfTU851VFcp2kXIgg-n5p52D4Jryav9uo&usqp=CAU://gravatar.com/avatar/1f82b0492a0a938288c2d5b70534a1fb?s=400&d=robohash&r=x",
        },
        {
          id: 3,
          name: "Artem",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNONE6lTorlQ3xqaJm4o51Cwavx0UiR4szgsbTrS7Agdovq7G5UbJ4ZMLpOmwjsCNAO10&usqp=CAU",
        },
      ],
    }
  },

  _callSubscriber() {
    console.log("State changed!!!");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  getState() {
    return this._state;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.profilePage = sideBarReducer(this._state.profilePage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
