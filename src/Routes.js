import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Main from "./Pages/Main/Main";
import SearchResult from "./Pages/SearchResult/SearchResult";
import Detail from "./Pages/Detail/Detail";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/searchresult" component={SearchResult} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
