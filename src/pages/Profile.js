import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { auth, } from "../services/firebase";
import { Link } from 'react-router-dom';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: auth().currentUser
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Header />
        <br></br><br></br>
              <div className="container">
                <div className="komkom-list">
                
                <Link className="nav-item nav-link text-white" to="/channels/live">
                    <div className="komkom">
                      <div className="card_image"><img src="/assets/images/cards.jpg" alt=""/> </div>
                      <div className="card_title title-white">
                          <span className="icon-television h1"></span>
                          <p>Live Tv</p>
                      </div>
                  </div>
                </Link>
  
                <Link className="nav-item nav-link text-white" to="/movies">
                    <div className="komkom 2">
                      <div className="card_image"><img src="/assets/images/cards.jpg" alt=""/></div>
                          <div className="card_title title-white">
                          <span className="icon-play h1"></span>
                          <p>Movies</p>
                      </div>
                    </div>
                </Link>
  
                <Link className="nav-item nav-link text-white" to="/series">
                  <div className="komkom 3">
                    <div className="card_image"><img src="/assets/images/cards.jpg" alt=""/></div>
                        <div className="card_title">
                        <span className="icon-film h1"></span>
                          <p>Series</p>
                        </div>
                  </div>
                  </Link>
                  
                </div>
                <br></br>
                <div className="container">
                  <h5 className="text-secondary float-right" ><strong><span className="icon-user h3"></span> ON :</strong> {this.state.user.email}</h5>
                </div>
              </div>
              
              
          
        <Footer />
    </div>
    );
  }
}
