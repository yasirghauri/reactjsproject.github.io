import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Single from "./pages/Single";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
 
function App() {
  return (
    <div>

      <Router>
        <Header />
          
          <Switch>
            <Route exact path = '/' component ={Home} />
            <Route exact path = '/about' component ={About} />
            <Route exact path = '/services' component ={Services} />
            <Route exact path = '/single' component ={Single} />
            <Route exact path = '/gallery' component ={Gallery} />
            <Route exact path = '/contact' component ={Contact} />
          </Switch>

          <Footer />
       </Router>

      
          </div>
  );
}

export default App;
