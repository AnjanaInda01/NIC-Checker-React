import React, { useState } from "react";
import Idcard from "../../../assets/Id_new.png";
import Text from "../Text_Field/Text";
import Btn from "../Button/btn";
import NICDetails from "../NICDetails/NICDetails";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import lankaNIC from "lanka-nic";

export default function CheckId({ onCancel }) {
  const [nic, setNic] = useState("");
  const [details, setDetails] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullNIC = nic.trim(); 
    let nicToCheck = fullNIC;

  
    if (/^\d{12}$/.test(nicToCheck)) {
      nicToCheck = nicToCheck.slice(2);
    }

    try {
      const data = lankaNIC.getInfoFromNIC(nicToCheck);
      if (!data) {
        alert("Invalid NIC number!");
        setDetails(null);
        return;
      }

      setDetails({
        fullNIC,
        nic: nicToCheck, 
        birthday: data.dateOfBirth.toISOString().split("T")[0],
        gender: data.gender,
      });
    } catch (error) {
      alert("Invalid NIC number!");
      setDetails(null);
    }
  };

  return (
    <div className="card-pre">
      <FontAwesomeIcon
        icon={faTimes}
        className="cancel-icon"
        onClick={onCancel}
      />
      <img src={Idcard} alt="NIC Card" className="id" />
      <form className="form" onSubmit={handleSubmit}>
        <Text
          className="text"
          value={nic}
          onChange={(e) => setNic(e.target.value)}
          placeholder="Enter NIC No"
        />
        <Btn className="btn" text="Submit" type="submit" />
      </form>
      {details && (
        <NICDetails
          nic={details.fullNIC}
          birthday={details.birthday}
          gender={details.gender}
        />
      )}
    </div>
  );
}
