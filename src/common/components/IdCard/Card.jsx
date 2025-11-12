import React from "react";
import "./style.css";
import Idcard from "../../../assets/Id_new.png";

export default function Card() {
  return (
    <div className="image-container">
      <h1>Check NIC details</h1>
      <div class="nic-card">
        <img src={Idcard} alt="NIC Card" />
        <div class="overlay">Click</div>
      </div>
    </div>
  );
}
