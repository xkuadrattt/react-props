import React from "react";
import imgVerified from "../assets/img/verified.png";

const SectionCurhat = function (props) {
  return (
    <div className="post mt-[2rem]">
      <h3 className="text-[1.5rem] text-blue-400 inline-block">{props.user}</h3>
      {props.verified && (
        <img
          src={imgVerified}
          alt="assets"
          width={16}
          className="inline ml-[.2rem] relative bottom-1"
        />
      )}

      <p className="text-[.75rem] text-gray-400">{props.dateTime}</p>
      <div className="mt-[.5rem]">
        <p>{props.caption}</p>
      </div>
    </div>
  );
};

export default SectionCurhat;
