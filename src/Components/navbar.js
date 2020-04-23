import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top text-white ">


  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto mr-auto">
      <li class="nav-item ml-4 mr-4">
        <Link to="/"><a class="nav-link" href="#">Setup</a></Link>
      </li>
      <li class="nav-item ml-4 mr-4">
         <Link to="/data"> 
        <a class="nav-link" >Data</a>
        </Link>
      </li>
      <li class="nav-item ml-4 mr-4">
         <Link to="/notes"> 
        <a class="nav-link" >Notes</a>
        </Link>
      </li>
      <li class="nav-item ml-4 mr-4">
         <Link to="/graphs"> 
        <a class="nav-link" >Graphs</a>
        </Link>
      </li>
  
    </ul>
  </div>
</nav>
    );
}

export default Nav;