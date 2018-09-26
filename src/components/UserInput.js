import React from 'react';
import './userInput.css';

export default function ({ nameInput, imgInput, handleInput, addUser}) {
    return (
        <div className="user-input--component">
            <input type="text" value={nameInput}
                   name="nameInput"
                   placeholder="name"
                   onChange={handleInput}></input>
            <input type="text" value={imgInput}
                   placeholder="image"
                   name="imgInput"
                   onChange={handleInput}></input>
            <button onClick={addUser}>submit</button>
        </div>
    )
}