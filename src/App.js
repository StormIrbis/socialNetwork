import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Music from "./Components/Music/Music";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="page">
        <div className="app-wrapper">
          <Header />
          <div className="navBar_wrapper">
            <Navbar sideBarData={props.state.sideBar.sideBarData} />
          </div>
          <div className="main_content">
            <Routes>
              <Route
                exact
                path="/profile"
                element={
                  <Profile
                    postsData={props.state.profile.postsData}
                    newPostText={props.state.profile.newPostText}
                    dispatch={props.dispatch}
                  />
                }
              />
              <Route
                exact
                path="/dialogs"
                element={
                  <Dialogs
                    dialogsData={props.state.dialogs.dialogsData}
                    messagesData={props.state.dialogs.messagesData}
                    dispatch={props.dispatch}
                  />
                }
              />
              <Route exact path="/news" element={<News />} />
              <Route exact path="/music" element={<Music />} />
              <Route exact path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
