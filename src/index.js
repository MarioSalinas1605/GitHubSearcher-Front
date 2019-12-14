import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App.jsx";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/Text-queries.scss";

const initialState = {
  user: "MarioSalinas1605"
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
