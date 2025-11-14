import React from "react";
import c from "../../utils/nullCheck";
import formatTime from "./../../utils/formatTime";
const Time = ({ time }) => {
  return (
    <div className="time">
      <div>
        <p>Scheduled</p>
        <p>{formatTime(c(time.scheduled?.departure))}</p>
      </div>

      <div>
        <p>Scheduled</p>
        <p>{formatTime(c(time.scheduled?.arrival))}</p>
      </div>

      <div>
        <p>Real</p>
        <p>{formatTime(c(time.real?.departure))}</p>
      </div>

      <div>
        <p>Estimated</p>
        <p>{formatTime(c(time.estimated?.arrival))}</p>
      </div>
    </div>
  );
};

export default Time;
