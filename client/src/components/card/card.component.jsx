import React from "react";

import "./card.styles.css";

const convert = (val) => {
  let gender = "";
  if (val === "m") {
    gender = "Male";
  } else {
    gender = "Female";
  }
  return gender;
};

export const Card = (props) => (
  <div className="card-container">
    <img alt="user" src={props.user.img} />
    <h2 className="name">{props.user.name}</h2>
    <p className="gender">Gender : {convert(props.user.gender)}</p>
    <p className="age">Age : {props.user.age}</p>
    <p
      className={` status ${
        props.user.status === "left"
          ? "left"
          : props.user.status === "active"
          ? "active"
          : "on"
      }`}
    >
      {props.user.status}
    </p>
    <p>{props.user.date}</p>
  </div>
);
