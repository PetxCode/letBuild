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
import Registration from "./SignUp/Registration";
import { AppProvider } from "./SignUp/Auth";
import { GlobalStyle } from "./GlobalStyles";
import Dashboard1 from "./DashBord/Dashboard";
import CoursesPaage from "./DashBord/CoursesPaage";
import Redesign from "./DashBord/Redesign";
import HeaderViewer from "./HeaderViewer";
import SelectACourse from "./DashBord/SelectYourCourse";

function App() {
  return (
    <AppProvider>
      <GlobalStyle />

      <Router>
        <HeaderViewer />
        <Switch>
          <Route exact path="/" component={CurriculumHolder} />
          <Route exact path="/load" component={LoadCourse} />
          <Route exact path="/modal" component={ModalNav} />
          <Route exact path="/modalpath" component={MUModal} />
          <Route exact path="/in" component={AppAuth} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/dashboard" component={Dashboard1} />
          <Route exact path="/course" component={CoursesPaage} />
          <Route exact path="/redesign" component={Redesign} />
          <Route exact path="/showCourse" component={SelectACourse} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
