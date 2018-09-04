import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Container, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";
import Auth from '../app/Auth';
import Main from '../app/Main';
import Home from '../app/Home';
class Header extends Component {



    render() {
        return (
            <header className="masthead mb-auto container">
                <div className="inner">
                    <h3 className="masthead-brand">Application React</h3>
                    <nav className="nav nav-masthead justify-content-center">
                        <Link to={`/`} component={Home} className="nav-link">
                            Accueil
                        </Link>
                        <Link to={`/auth`} component={Auth} className="nav-link">
                            Login
                        </Link>
                        <Link to={`/app`} component={Main}  className="nav-link">
                            Application
                        </Link>
                    </nav>
                </div>
            </header>
        );
    }
}

Header.propTypes = {};

export default Header;
