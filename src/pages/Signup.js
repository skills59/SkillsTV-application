import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../helpers/auth';

export default class SignUp extends Component {

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
      await signup(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div className="index-wrapper">
            <div className="container">
              <div className="d-flex justify-content-center h-100">
                <div className="card">
                  <div className="card-header">
				            <div className="d-flex justify-content-end social_icon">
					            <span><i className="fab fa-facebook-square"></i></span>
					            <span><i className="fab fa-instagram"></i></span>
					            <span><i className="fab fa-twitter-square"></i></span>
				            </div>
			            </div>
                  
                  <div className="card-body">
                      <form className="mt-5 py-5 px-5" autoComplete="off" onSubmit={this.handleSubmit}>
                        <div className="input-group form-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                          </div>
                            <input className="form-control" placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
                        </div>

                        <div className="input-group form-group">
                          <div className="input-group-prepend">
							              <span className="input-group-text"><i className="fas fa-key"></i></span>
						              </div>
                          <input className="form-control" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
                        </div>
                        
                        <div className="row align-items-center remember">
						              <input type="checkbox"/>Remember Me
					              </div>
                          
                        <div className="form-group">
                          {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
                            <button className="btn btn-success rounded-pill px-5 float-right">Register</button>
                        </div>
                      </form>

                      
                        <div className="d-flex justify-content-center links">
					                 Already got an account?<Link className="title" to="/login"> Login</Link>
                        </div>

                  </div>
            </div>
          </div>
        </div>
        </div>
    )
  }
}
