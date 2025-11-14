import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__inner"></div>
      <div className="loader__orbit">
        <div className="loader__dot"></div>
        <div className="loader__dot"></div>
        <div className="loader__dot"></div>
        <div className="loader__dot"></div>
      </div>
    </div>
  );
};

export default Loader;
