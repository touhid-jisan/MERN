import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="/places/new" element={<NewPlace />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
