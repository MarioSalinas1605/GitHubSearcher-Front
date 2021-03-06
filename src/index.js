import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App.jsx";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducer from "./reducers";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/Text-queries.scss";

const initialState = {
  user: "MarioSalinas1605"
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
