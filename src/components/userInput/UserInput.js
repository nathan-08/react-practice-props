import React from 'react';
import './userInput.css';

export default function ({ nameInput, imgInput, handleInput, addUser}) {
    return (
        <div className="user-input--component">
            <input type="text" placeholder="name"></input>
            <input type="text" placeholder="image_url"></input>
            <button>submit</button>
        </div>
    )
}