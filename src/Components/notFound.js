import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../Assets/notFound.css';

export default class notFound extends Component {
    render() {
        return (
            <div className='mainbox'>
                <div className="err">
                    <span>4</span>
                    <i className="far fa-question-circle fa-spin"></i>
                    <span>4</span>
                </div>
                <div className="msg">The page you are looking for doesn't exist or an error occurred.<p>Let's go <Link to="/">home</Link> and try from there.</p></div>
            </div>
        )
    }
}
