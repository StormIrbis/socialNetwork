import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Header from "./Components/Header/Header";
import Music from "./Components/Music/Music";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";

const App = (props) => {
  return (
    <div className="page">
      <div className="app-wrapper">
        <Header />
        <div className="navBar_wrapper">
          <Navbar />
        </div>
        <div className="main_content">
          <Routes>
            <Route
              exact
              path="/profile"
              element={<Profile />}
            />
            <Route
              exact
              path="/dialogs"
              element={
                <DialogsContainer />
              }
            />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/music" element={<Music />} />
            <Route exact path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
