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
import News from "./pages/news-page/News"
import NewsDetail from "./pages/news-detail-page/NewsDetail";


export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/contacts" component={ContactsPage}/>
          <Route path="/about-us" component={AboutUs}/>
          <Route path="/" exact component={MainPage}/>
          <Route path="/federations/:id" exact component={Federation}/>
          <Route path="/news" exact component={News}/>
          <Route path="/news/:id" exact component={NewsDetail}/>
        </Switch>
      </Router>
    </div>
  );
}
