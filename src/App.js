import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import GroupPhase from "./pages/GroupPhase/GroupPhase";
import KnockoutPhase from "./pages/KnockoutPhase/KnockoutPhase";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/groupPhase" component={GroupPhase} />
          <Route exact path="/knockoutPhase" component={KnockoutPhase} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
