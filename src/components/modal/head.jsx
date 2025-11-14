import React from "react";
import { useDispatch } from "react-redux";
import { close } from "../../redux/slices/detailSlice";
import c from './../../utils/nullCheck';

const Head = ({ info }) => {
  const dispatch = useDispatch();

  return (
    <div className="head">
      <div className="">
        <h3 title="Callsign">{c(info?.identification?.callsign)}</h3>
        <span title="Flight Number">
          {c(info?.identification?.number?.default)}
        </span>
        <span title="Flight Code">{c(info?.aircraft?.model?.code)}</span>
      </div>

      <button onClick={() => dispatch(close())}>X</button>
    </div>
  );
};

export default Head;
