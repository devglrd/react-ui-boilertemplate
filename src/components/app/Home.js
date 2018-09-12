import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Home extends Component {

    componentDidMount(){

    }

    getUser = () => {
        const user = localStorage.getItem("user");
        console.log(user);
        if (user) {
            return;
        }
    }
    render() {
        return (
            <main role="main" className="inner cover container">
                <h1 className="cover-heading">Cover your page.</h1>
                <p className="lead">Cover is a one-page template for building simple and beautiful home pages.
                                    Download, edit the text, and add your own fullscreen background photo to make it
                                    your own.</p>
                <p className="lead">
                    <a href="#" className="btn btn-lg btn-secondary" onClick={this.getUser}>Learn more</a>
                </p>
            </main>

        );
    }
}

Home.propTypes = {};

export default Home;
