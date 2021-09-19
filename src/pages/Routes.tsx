import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import Home from "./Home";
import Login from "./Login";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/criar-conta" component={CreateAccount} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}
