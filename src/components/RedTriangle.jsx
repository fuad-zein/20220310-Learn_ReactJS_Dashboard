import React from "react";

const RedTriangle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={18}
    width={18}
    fill="red"
    className="hover:fill-red-800"
    {...props}
  >
    <path d="M0 24V0h24v24H0z" fill="none" />
    <path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" />
  </svg>
);

export default RedTriangle;
