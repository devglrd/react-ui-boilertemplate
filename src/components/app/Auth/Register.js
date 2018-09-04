import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Auth from "../Auth";
import {Link} from "react-router-dom";

class Register extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="w-50 m-auto text-center">
                <h1 className="h3 mb-3 font-weight-normal">Inscrivez vous</h1>
                <div className="form-group">
                    <label htmlFor="inputEmail" className="sr-only">Pseudo</label>
                    <input type="email" id="inputEmail" name="email" className="form-control"
                           placeholder="Email address" required autoFocus />
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" name="email" className="form-control"
                           placeholder="Email address" required autoFocus />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" name="password" className="form-control"
                           placeholder="Password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword" className="sr-only">Confirm Password</label>
                    <input type="password" id="inputPassword" name="password" className="form-control"
                           placeholder="Password" required />
                </div>
                <button className="btn btn-lg btn-primary btn-block mb-3" data-link="register" type="submit">S'inscire
                </button>
                <Link to={`/auth/login`} component={Auth} className="cursor">
                    Se connecter
                </Link>
            </div>
        );
    }
}

Register.propTypes = {};

export default Register;
