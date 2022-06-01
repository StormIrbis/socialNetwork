import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

let rerenderEntireTree = (state) => {
  // const root = ReactDOMClient.createRoot(document.getElementById("root"));

  // root.render(
  //   <React.StrictMode>
  //     <App state={state} store={store} dispatch={store.dispatch.bind(store)} />
  //   </React.StrictMode>
  // );

  ReactDOM.render(
    <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};


rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
