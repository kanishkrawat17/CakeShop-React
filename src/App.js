import "./styles.css"
// import Usualinfo from './Usualinfo';
import Home from "./Home"
import Login from "./Login";
import  CakeForm  from './CakeForm.js';
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import Usualinfo from "./Usualinfo";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path = "/" exact element = {<Home/>} /> 
            <Route path ="/login" exact element = {<Login/>} />
            <Route path ="/usualinfo" exact element = {<Usualinfo/>} />
            <Route path ="/cakeform" exact element = {<CakeForm/>} />
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;





















