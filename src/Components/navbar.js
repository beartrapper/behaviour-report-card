import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top text-white ">
<a class="navbar-brand" href="/">Behaviour Analysis</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
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