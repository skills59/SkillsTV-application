import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signin } from '../helpers/auth';
import './Home.css';

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: '' });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div>
        <div className="scale-in-center" id="welcome">
          <div className="container">
            <div className="wrapper">
              <div className="row">
                <div className="col-md-6 align-self-center">
                  <h1 className="text-success ">🆂🅺🅸🅻🅻🆂🆃🆅</h1>
                  <p className="lead">Watch thousands of Live Television Channels, Movies and Series 
			              wherever you are on an ever-expanding list of platforms including Web, 
                    iOS or Android Devices. Join Free For One Month and Cancel anytime
                  </p>
                      
                  <ul className="list-inline bnr_list">
                    <li className="list-inline-item">
                      <Link className="btn  text-white bg-success scroll shadow" to="/Signup">Join For a month</Link>
                    </li>

                    <li className="list-inline-item">
                      <Link className="btn  text-white bg-success scroll shadow" to="/login">Sign In and Watch</Link>
                    </li>
                  </ul> 
                      <img className="img-fluid" src="/assets/images/Progressive.png" alt=""/>
			                <img className="img-fluid" src="/assets/images/android.png" alt=""/>
			                <img className="img-fluid" src="/assets/images/apple.png" alt=""/>
			                <img className="img-fluid" src="/assets/images/windows.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    )
  }
}
