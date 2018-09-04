import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        return (
            <footer className="mastfoot mt-auto d-flex justify-content-center">
                <div className="inner">
                    <p>Boiler template for React, by <a
                        href="https://twitter.com/">@devglrd</a>.</p>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {};

export default Footer;
