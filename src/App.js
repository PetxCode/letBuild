import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import HeaderView from "./components/Peter/Header/HeaderView";
import "antd/dist/antd.css";
import HeaderView from "./components/Peter/Header/HeaderView";
import CurriculumHolder from "./components/Peter/CurriculumHolder";
import LoadCourse from "./components/Peter/LoadCourse/LoadCourse";
import ModalNav from "./components/Peter/ModalNav/ModalNav";
import MUModal from "./components/Peter/ModalNav/MUmodal";
import AppAuth from "./components/Home/AppAuth";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CurriculumHolder} />
        <Route exact path="/load" component={LoadCourse} />
        <Route exact path="/modal" component={ModalNav} />
        <Route exact path="/modalpath" component={MUModal} />
        <Route exact path="/in" component={AppAuth} />
      </Switch>
    </Router>
  );
}

export default App;
