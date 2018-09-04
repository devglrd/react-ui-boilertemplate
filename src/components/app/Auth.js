import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import api from "../../api/api";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            auth: "login"
        }
    }

    handleInput = (e) => {
        this.changeState(e.target.value, e.target.name);
    }

    handleAuth = (e) => {
        this.setState({
            auth: e.target.dataset.link
        })
    }

    changeState = (text, name) => {
        if (name === "password") {
            this.setState({
                password: text
            });
        } else if (name === "email") {
            this.setState({
                email: text
            })
        }
    }


    login = () => {
        //url for logign
        let url = "http://127.0.0.1:8000/api/login";
        let data = {
            password: this.state.password,
            email: this.state.email
        };
        api.post(url, data).then(res => {
            console.log(res);
        });
    }

    render() {
        let renderAuth;
        if (this.state.auth === "login") {
            renderAuth = (
                <div className="w-50 m-auto text-center">
                    <h1 className="h3 mb-3 font-weight-normal">Connectez vous</h1>
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" name="email" className="form-control"
                               placeholder="Email address" required autoFocus onChange={this.handleInput.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" name="password" className="form-control"
                               placeholder="Password" required onChange={this.handleInput.bind(this)}/>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" onClick={this.login} type="submit">Connectez
                                                                                                            vous
                    </button>

                    <span data-link="register" className="cursor mt-4" onClick={this.handleAuth}>S'inscire</span>
                </div>
            );
        } else if (this.state.auth === "register") {
            renderAuth = (
                <div className="w-50 m-auto text-center">
                    <h1 className="h3 mb-3 font-weight-normal">Inscrivez vous</h1>
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="sr-only">Pseudo</label>
                        <input type="email" id="inputEmail" name="email" className="form-control"
                               placeholder="Email address" required autoFocus onChange={this.handleInput.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" name="email" className="form-control"
                               placeholder="Email address" required autoFocus onChange={this.handleInput.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" name="password" className="form-control"
                               placeholder="Password" required onChange={this.handleInput.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword" className="sr-only">Confirm Password</label>
                        <input type="password" id="inputPassword" name="password" className="form-control"
                               placeholder="Password" required onChange={this.handleInput.bind(this)}/>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" onClick={this.login} type="submit">S'inscire
                    </button>
                    <span data-link="login" className="cursor mt-4" onClick={this.handleAuth}>Se connecter</span>
                </div>
            );
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        {renderAuth}
                    </div>
                </div>
            </div>
        );
    }
}

Auth.propTypes = {};

export default Auth;
