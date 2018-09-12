import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Container, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";
import Auth from '../app/Auth';
import Main from '../app/Main';
import Home from '../app/Home';
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount (){
        const user = sessionStorage.getItem('user');
        if (user){
            this.setState({
                user : user
            });
        }
    }

    render() {
        let renderNavbar;
        if (this.state.user != null){
            renderNavbar = (<div className="d-flex ml-3"><Link to={`/auth/logout`} component={Auth} className="nav-link">Logout</Link><Link to={`/app`} component={Main}  className="nav-link">
                Application
            </Link></div>)
        } else{
            renderNavbar = (<Link to={`/auth/login`} component={Auth} className="nav-link">login</Link>)
        }
        return (
            <header className="masthead mb-auto container">
                <div className="inner">
                    <h3 className="masthead-brand">Application React</h3>
                    <nav className="nav nav-masthead justify-content-center">
                        <Link to={`/`} component={Home} className="nav-link">
                            Accueil
                        </Link>
                        {renderNavbar}
                    </nav>
                </div>
            </header>
        );
    }
}

Header.propTypes = {};

export default Header;
