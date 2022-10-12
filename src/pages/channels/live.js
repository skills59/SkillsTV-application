import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { auth, } from "../../services/firebase";


export default class channels extends Component {
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
        <Header/>
        <br></br><br></br><br></br>
          <div className="container">
              <div className="wrapper">
              


  
            </div>
          </div>

          <br></br>
          <div className="container">
            <h5 className="text-secondary float-right" ><strong><span className="icon-user h3"></span> ON :</strong> {this.state.user.email}</h5>
          </div>
        <Footer/>
      </div>
    )
  }
}
