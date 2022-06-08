const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      photoUrl: 'https://www.kino-teatr.ru/acter/foto/hollywood/48121.jpg',
      fullName: "Dmitry B.",
      followed: false,
      status: "I am a boss",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 2,
      photoUrl: 'https://www.kino-teatr.ru/acter/foto/hollywood/48121.jpg',
      fullName: "Serhii B.",
      followed: true,
      status: "He is a boss too",
      location: { city: "Sydney", country: "Australia" },
    },
    {
      id: 3,
      photoUrl: 'https://www.kino-teatr.ru/acter/foto/hollywood/48121.jpg',
      fullName: "Egor B.",
      followed: true,
      status: "He is a little boy",
      location: { city: "Kolobjeg", country: "Poland" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }

    case SET_USERS: {
      return {...state, users: [...state.users, ...action.users]}
    }

    default:
      return state;
  }
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export default usersReducer;
