import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from './Components/UserContext';

ReactDOM.render(

  // <UserProvider>
    <App />,
    // </UserProvider>,
  document.getElementById('root')
);

