import React from "react";
import Idcard from "../../../assets/Id_new.png";
import Text from "../Text_Field/Text";
import Btn from "../Button/btn";
import './style.css'

export default function CheckId() {
  return (
    <div className="card-pre">
      <img src={Idcard} alt="" className="id"/>
      <div className="form">
        <Text className="text"/>
        <Btn className="btn"/>
      </div>
    </div>
  );
}
