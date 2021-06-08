import React, { Component } from 'react';
import '../Assets/notFound.css';

export default class home extends Component {
    render() {
        return (
            <div className='mainbox'>
                <div className="err">
                    Home page
                </div>
                <div className="msg">This is a public page where every user can access</div>
            </div>
        )
    }
}
