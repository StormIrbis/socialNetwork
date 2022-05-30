

let initialState = {
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
};
const sideBarReducer = (state = initialState, action) => {
  return state;
};

export default sideBarReducer;
