import {Routes, Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Music from "./Components/Music/Music";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";

const App = (props) => {
  return (
    <div className="page">
      <div className="app-wrapper">
        <HeaderContainer /> 
        <div className="navBar_wrapper">
          <Navbar />
        </div>
        <div className="main_content">
          <Routes>
            <Route path="/profile/" >
              <Route path=":id" element={<ProfileContainer />} />
              <Route path="" element={<ProfileContainer />} />
            </Route>
            <Route exact path="/dialogs" element={<DialogsContainer />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/music" element={<Music />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
