import React, { useState } from "react";
import Idcard from "../../../assets/Id_new.png";
import Text from "../Text_Field/Text";
import Btn from "../Button/btn";
import NICDetails from "../NICDetails/NICDetails";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";



function parseNIC(nic) {
  if (!nic) return null;

  nic = nic.trim();

  if (nic.length === 12) {
    const year = parseInt(nic.slice(0, 4));
    let dayOfYear = parseInt(nic.slice(4, 7));
    let gender = "Male";

    if (dayOfYear > 500) {
      gender = "Female";
      dayOfYear -= 500;
    }

    const date = new Date(year, 0);
    date.setDate(dayOfYear);

    return {
      nic,
      birthday: date.toISOString().split("T")[0],
      gender,
    };
  }

  return null;
}

export default function CheckId({ onCancel }) {
  const [nic, setNic] = useState("");
  const [details, setDetails] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = parseNIC(nic);
    if (!data) {
      alert("Invalid NIC number! Please try again.");
      setDetails(null);
      return;
    }

    setDetails(data);
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
        <Btn className="btn" text="Submit" type="submit"  />
      </form>

      {details && (
        <NICDetails
          nic={details.nic}
          birthday={details.birthday}
          gender={details.gender}
        />
      )}
    </div>
  );
}
