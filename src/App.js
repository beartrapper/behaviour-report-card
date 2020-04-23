import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import SignIn from './Components/Login';
import SignUpOption from './Components/Signup';
import Data from './Components/Data';
import Notes from './Components/Notes';
import Graphs from './Components/Graphs';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUpOption} />
          <Route path="/data" component={Data} />
          <Route path="/graphs" component={Graphs} />
          <Route path="/notes" component={Notes} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
