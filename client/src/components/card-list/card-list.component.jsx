import React from "react";

import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.users.map((user) => (
      <Card key={user.id} user={user} />
    ))}
  </div>
);
