import React from "react";
import Layout from "./Layout";
import UsersSearcher from "../containers/UsersSearcher";
import RepositoriesSearcher from "../containers/RepositoriesSearcher.jsx";

const App = () => {
  return (
    <>
      <Layout>
        {/* <UsersSearcher /> */}
        <RepositoriesSearcher />
      </Layout>
    </>
  );
};

export default App;
