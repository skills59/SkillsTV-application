import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';

function Header() {
  
  return (
    <header>
      <nav className="navbar navbar-light navbar-expand-md fixed-top navigation-clean shadow active">
      <div className="container">
        <Link className="navbar-brand text-success" to="/">🆂🅺🅸🅻🅻🆂🆃🆅</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
        
          <ul className="nav navbar-nav mx-auto">
              
          </ul>

          <Link className="nav-item nav-link text-white" to="/profile"><span className="icon-home"> Homepage</span></Link>
          <Link className="nav-item nav-link text-white" to="/profile"><span className="icon-book"> Tv Guide</span></Link>
          <Link className="nav-item nav-link text-white" to="/profile"><span className="icon-fiber_smart_record"></span>  Recordings </Link>
          <Link className="nav-item nav-link text-white" to="/portfolio/"> <span className="icon-bell-o">   Notifications</span></Link>
          <Link className="nav-item nav-link text-white" to="/profile"><span className="icon-cog"></span>   Settings</Link>

          {auth().currentUser ? 
          <Link className="nav-item nav-link text-success" to="/" onClick={() => auth().signOut()}><span className="icon-power-off"></span>  OFF</Link>
					 
            : 
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/login">Sign In</Link>
              <Link className="nav-item nav-link" to="/signup">Sign Up</Link>
            </div>
            }
        </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;