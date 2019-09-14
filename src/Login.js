import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {login} from './actions/authActions';

class Login extends Component {

    state = {
      name: "",
      pass: ""
    };
    OnformSubmit = e => {
      e.preventDefault();

      const {name,pass}=this.state;


      this.props.login(name,pass,this.props.history);
    };
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    render() {
      return (
        <div className="container mt-3" style={{ height: 650, width: 350 }}>
          <div className="card bg-primary card-form text-center">
            <div className="card-body">
              <h3>Log in Page</h3>
              <form onSubmit={this.OnformSubmit}>
                <div className="form-group">
                  Username
                  <input
                    onChange={this.handleChange}
                    type="text"
                    id="name"
                    name="name"
                    value={this.state.name}
                    className="form-control"
                  ></input>
                  <br />
                  Password
                  <input
                    onChange={this.handleChange}
                    type="password"
                    id="pass"
                    name="pass"
                    value={this.state.pass}
                    className="form-control"
                  />
                  <br />
                  <button className="btn btn-success btn-lg btn-block">
                    LogIn
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }


export default connect(null,{login})(withRouter(Login));