import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MainPage from "./pages/main-page/MainPage";
import AboutUs from "./pages/about-us-page/AboutUs";


export default function App() {
  return (
      <div className="App">
          <Router>
              <Switch>
                  {/*<Route path="/about"/>*/}
                  {/*<Route path="/users"/>*/}
                  <Route path="/about-us" component = {AboutUs}/>

                  <Route path="/" exact component={MainPage}/>
              </Switch>
          </Router>d
      </div>
  );
}
