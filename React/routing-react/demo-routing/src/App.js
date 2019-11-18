import React, { Component } from 'react'
import About from './component/About'
import Home from './component/Home'
import Dashboard from './component/Dashboard'
import Topics from './component/Topics'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom"

class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <ul>
           <li>
             <Link to="/home">Home</Link>
           </li>
           <li>
             <Link to="/about">About</Link>
           </li>
           <li>
             <Link to="/dashboard">Dashboard</Link>
           </li>
           <li>
             <Link to="/topics">Topics</Link>
           </li>
         </ul>
     
       <Switch>
         <Route path="/home"> 
         <Home/>
         </Route>
         <Route path="/about"> 
         <About/>
         </Route>
         <Route path="/dashboard"> 
         <Dashboard/>
         </Route>
         <Route path="/topics"> 
         <Topics/>
         </Route>
       </Switch> 
       </div>
     </Router> 
     
    )
  }
}
export default App;

/* export  function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
 function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
} */