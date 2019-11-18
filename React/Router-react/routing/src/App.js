import React from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Error from './Component/Error';
import Navigator from './Component/Navigator';

function App() {
  return (
   
   <BrowserRouter>
   <Navigator>
   <Switch>
     <Route Path="/" component={Home} exact/>
     <Route Path="/about" component={About}/>
     <Route component={Error}/>
     </Switch>
     </Navigator>
   </BrowserRouter>
  );
}

export default App;
