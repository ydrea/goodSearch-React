import React from "react";

export default function CharacterItem({ item }) {
  console.log(item);
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt="ku-ku" />
        </div>
        <div className="card-back">
          <h5>{item.name}</h5>
        </div>
      </div>
    </div>
  );
}
