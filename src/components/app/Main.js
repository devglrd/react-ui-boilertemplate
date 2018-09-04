import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Main extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>
                            Main application
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

Main.propTypes = {};

export default Main;
