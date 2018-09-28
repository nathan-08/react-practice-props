import React from "react";
import "./pokeDisplay.css";

export default function( {name, image} ) {
  return (
    <div className="user-display--component">
      <div>
        <p> {name} </p>
        <img src={image} alt="image-url_goes_here" />
      </div>
    </div>
  );
}
