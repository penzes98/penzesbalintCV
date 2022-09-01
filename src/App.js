import Sidebar from "./Components/Sidebar";
import './App.css';
//import { BrowserRouter as Router, Route } from "react-router-dom";
//import Home from "./Pages/Home";
//import Schools from "./Pages/Schools";
//import Experiences from "./Pages/Experiences";
//import AboutMe from "./Pages/AboutMe";

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/*<Router>
        <Sidebar />
          /*<Route path='/home' component={Home}/>
          <Route path='/schools' component={Schools}/>
          <Route path='/experiences' component={Experiences}/>
          <Route path='/aboutMe' component={AboutMe}/>
      </Router>*/}
    
      <footer>Pénzes Bálint 2022</footer> 
    </div>
  );
  
}

export default App;
