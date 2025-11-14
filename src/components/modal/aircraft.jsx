import React from "react";
import { IoAirplaneOutline } from "react-icons/io5";
import c from "../../utils/nullCheck";
const Aircraft = ({ aircraft }) => {
  console.log(aircraft);
  return (
    <div className="aircraft">
      <div className="icon">
        <IoAirplaneOutline />
      </div>

      <div>
        <p>
          <span className="title">Aircraft Type</span>
          <span>{c(aircraft?.model?.text)}</span>
        </p>

        <div>
          <p>
            <span className="title">Tail Number</span>
            <span>{c(aircraft?.registration)}</span>
          </p>

          <p>
            <span className="title">Country Id</span>
            <span>{c(aircraft?.countryId)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aircraft;
