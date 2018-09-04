import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Auth from "../Auth";
import {Link} from "react-router-dom";

class Loign extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="w-50 m-auto text-center">
                <h1 className="h3 mb-3 font-weight-normal">Connectez vous</h1>
                <div className="form-group">
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" name="email" className="form-control"
                           placeholder="Email address" required autoFocus/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" name="password" className="form-control"
                           placeholder="Password" required/>
                </div>
                <button className="btn btn-lg btn-primary btn-block mb-3" data-link="login" type="submit">Connectez vous</button>

                <Link to={`/auth/register`} component={Auth} className="cursor">
                    S'inscrire
                </Link>
            </div>
        );
    }
}

Loign.propTypes = {};

export default Loign;
