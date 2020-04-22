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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUpOption} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
