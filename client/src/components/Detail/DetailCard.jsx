import React from "react";
import { useSelector } from "react-redux";

import "./DetailCard.css";

export default function DetailCard() {
  const detail = useSelector((state) => state.detail);

  return (
    <>
      <div className="detail-container">
        <div className="card-detail">
          <div className="card-items">
            <div className="container_detail_img">
              <img
                className="detail-img"
                src={detail.image}
                alt={detail.name}
              />
            </div>

            <h2 className="text-title">{detail.name}</h2>
            <h3 className="text-h4">Types:</h3>
            <p className="text-body"> {detail.types}</p>

            <div className="group-detail">
              <h3 className="text-h4">Hp:</h3>
              <p className="text-body">{detail.hp}</p>
              <h3 className="text-h4">Defense:</h3>
              <p className="text-body"> {detail.defense} </p>
            </div>

            <div className="group-detail">
              <h3 className="text-h4">Attack:</h3>
              <p className="text-body"> {detail.attack}</p>
              <h3 className="text-h4">Speed:</h3>
              <p className="text-body"> {detail.speed}</p>
            </div>

            <div className="group-detail">
              <h3 className="text-h4">Height:</h3>
              <p className="text-body"> {detail.height}</p>
              <h3 className="text-h4">Weight:</h3>
              <p className="text-body"> {detail.weight}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
