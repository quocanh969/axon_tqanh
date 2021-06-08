import React, { Component } from 'react';
import '../Assets/notFound.css';

export default class devices extends Component {
    render() {
        return (
            <div className='mainbox'>
                <div className="err">
                    Devices page
                </div>
                <div className="msg">This is a restricted page where only authorized user can access</div>
            </div>
        )
    }
}
