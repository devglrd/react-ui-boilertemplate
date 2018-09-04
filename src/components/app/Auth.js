import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import api from "../../api/api";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: "login"
        }
    }

    static getDerivedStateFromProps = (props, state) => {
        // Store prevWorkId in state so we can compare when props change.
        // Clear out previously-loaded work (so we don't render stale stuff).
        let auth;
        if (props.match.path === "/auth/login"){
            auth = "login";
        } else if (props.match.path === "/auth/register"){
            auth = "register";
        }
        if (state.auth !== auth) {
            return {
                auth: auth
            }
        }else{
            return null
        }
    }


    componentDidMount(){
        if (this.props.match.path === "/auth/login"){
            this.setState({
                auth : "login"
            })
        } else if (this.props.match.path === "/auth/register"){
            this.setState({
                auth : "register"
            })
        }
    }

    render() {
        let renderAuth;
        if (this.state.auth === "login") {
            renderAuth = (<Login />);
        } else if (this.state.auth === "register") {
            renderAuth = (<Register />);
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
