import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Auth from "../Auth";
import {Link} from "react-router-dom";
import api from "../../../api/api";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            flashError: null,
            user : {}
        }
    }

    componentDidMount(){
        const user = sessionStorage.getItem("user");
        if (user) {
            this.setState({ user: JSON.parse(user) });
            return;
        }
    }


    handleInput = (e) => {
        if (e.target.name === "email") {
            this.setState({
                email: e.target.value
            })
        } else if (e.target.name === "password") {
            this.setState({
                password: e.target.value
            })
        }
    }


    login = () => {
        if (this.state.password === null|| this.state.email === null) {
            this.setState({
                flashError: "Vous devez renseigner votre email et votre mot de passe"
            })
        } else {
            this.setState({
                flashError: null
            });
            let url = "http://127.0.0.1:3002/api/login";
            let data = {
                email: this.state.email,
                password: this.state.password
            };
            api.post(url, data).then(res => {
                console.log(res);
                if (res.data.error){
                    this.setState({
                        flashError : res.data.error
                    })
                } else{
                    console.log(res.data);
                    this.setState({
                        user : res.data.user
                    });
                    sessionStorage.setItem("user", JSON.stringify(res.data.user));
                }
            })
        }
    };

    getUser = () => {
        console.log(sessionStorage.getItem('user'))
    };

    render() {
        return (
            <div className="w-50 m-auto text-center">
                <h1 className="h3 mb-3 font-weight-normal">Connectez vous</h1>
                <h1 className="h3 mb-3 font-weight-normal" onClick={this.getUser}>User</h1>
                <div className="form-group">
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Email address"
                           onChange={this.handleInput.bind(this)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Password"
                           onChange={this.handleInput.bind(this)}/>
                </div>
                <button className="btn btn-lg btn-primary btn-block mb-3" data-link="login"
                        onClick={this.login}>Connectez vous
                </button>
                <div className="d-flex flex-column justify-content-center align-content-center">
                    <span className="fz-8 text-danger">{this.state.flashError}</span>
                    <Link to={`/auth/register`} component={Auth} className="cursor">
                        S'inscrire
                    </Link>
                </div>
            </div>
        );
    }
}

Login.propTypes = {};

export default Login;
