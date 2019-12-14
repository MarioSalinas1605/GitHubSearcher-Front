import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import UsersSearcher from "../containers/UsersSearcher";
import RepositoriesSearcher from "../containers/RepositoriesSearcher.jsx";
import UserRepositories from "../containers/UserRepositories.jsx";
import NotFound from "../containers/NotFound.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={UsersSearcher}></Route>
          <Route
            exact
            path="/repository"
            component={RepositoriesSearcher}
          ></Route>
          <Route
            exact
            path="/user-repositories"
            component={UserRepositories}
          ></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
