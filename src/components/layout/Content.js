import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import Footer from "./Footer";
import "../../assets/css/app.css"

class Content extends Component {

    render() {
        return (
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

Content.propTypes = {};

export default Content;
