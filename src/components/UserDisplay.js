import React from "react";
import "./userDisplay.css";

export default function({ name, img, removePoke }) {
  return (
    <div className="user-display--component"
         onClick={removePoke}>
      <div>
        <p> {name} </p>
        <img src={img} alt="user avatar" />
      </div>
    </div>
  );
}

// https://visualpharm.com/assets/319/Male%20User-595b40b65ba036ed117d3de6.svg
// https://visualpharm.com/assets/386/Female%20Profile-595b40b65ba036ed117d3de0.svg
// https://visualpharm.com/assets/561/Circled%20User%20Female%20Skin%20Type%203-595b40b65ba036ed117d3de2.svg
// https://visualpharm.com/assets/319/Male%20User-595b40b65ba036ed117d3de6.svg
// https://visualpharm.com/assets/657/Old%20Man%20Skin%20Type%204-595b40b85ba036ed117da73b.svg
//
