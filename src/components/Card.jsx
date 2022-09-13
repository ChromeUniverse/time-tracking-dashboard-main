import React from "react";
import iconEllipsis from "../assets/icon-ellipsis.svg";

function Card(props) {
  return (
    <div className={`card card-${props.type}`}>
      <div className="card-content">
        <div className="card-top">
          <h3 className="card-title">{props.title}</h3>
          <img className="card-ellipsis" src={iconEllipsis} alt="" />
        </div>
        <div className="card-data">
          <h2 className="card-current">{props.current}hrs</h2>
          <p className="card-previous">Last Week - {props.previous}hrs</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
