import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainPage from "./pages/main-page/MainPage";
import AboutUs from "./pages/about-us-page/AboutUs";
import ContactsPage from "./pages/contacts-page/ContactsPage";
import Federation from "./pages/federation-page/Federation";


export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/contacts" component={ContactsPage}/>
          <Route path="/about-us" component={AboutUs}/>
          <Route path="/" exact component={MainPage}/>
          <Route path="/federations/:id" exact component={Federation}/>
        </Switch>
      </Router>
    </div>
  );
}
