import React from "react";
import "./style.css";
import Idcard from "../../../assets/Id_new.png";

export default function Card({ onImageClick }) {
  return (
    <div className="image-container" onClick={onImageClick}>
      <h1>Check NIC details</h1>
      <div className="nic-card">
        <img src={Idcard} alt="NIC Card" />
        <div className="overlay">Click</div>
      </div>
    </div>
  );
}
