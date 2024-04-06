import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header/index";
// import Context from "./components/Context-body/index";
// import Light from "./components/Body-Light/index";
// import Profile from "./components/useState/index";
// import Name1 from "./components/UseContext";
// import StudentTable from "./components/Usecontext-ex";
// import Conditional from "./components/ConditionalOp";
// import Lifecycle from "./components/LifeCycle";
// import Navigation from "./components/Router/Navigation";
// import Profile from "./components/API-integrationGet";
import Post from "./components/API-integrationPost";

function App() {
  return (
    <>
      <div className="container">
        {/* <Header />
        <Context />
        <Light />
        <Profile />
        <Name1 />
        <StudentTable />
        <Conditional />
        <Lifecycle />
        <Navigation /> */}
        {/* <Profile /> */}
        <Post/>
      </div>
    </>
  );
}

export default App;
