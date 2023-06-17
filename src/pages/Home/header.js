import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear,faUser } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';

import './header.css'
import { Link } from 'react-router-dom';


function header(){
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand mylogo" href="#">OurLogo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 myUl">
        <li class="nav-item">
          <Link class="nav-link myHome" activeClassName="active" aria-current="page" to="/" >Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about" activeClassName="active">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/services" activeClassName="active">Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact" activeClassName="active">Contact</Link>
        </li>
      </ul>
      <div>
      <button onClick={showDiv} class="btn btn-primary mybtnSetting"><FontAwesomeIcon icon={faGear} /></button>
          <div class="itemDiv" id='tet'>
              <ul>
                <li><Link class="dropdown-item" to="/updateProfile" activeClassName="active">Update Profile</Link></li>
                <li><button class="dropdown-item" href="#">Message</button></li>
                <li><button class="dropdown-item" href="#">Show Store</button></li>
                <li><Link class="dropdown-item" to="/login">Log Out</Link></li>
              </ul>
          </div> 
      </div> 
    </div>
  </div>
</nav>
    )
}


function showDiv(){
  if(document.getElementById("tet").style.display=="block")
  {
    document.getElementById("tet").style.display="none";
  }
  else{
    document.getElementById("tet").style.display="block";
  }
}


export default header;