import React from "react";
import Avarta from "../atoms/Avarta";

function Infomation(props) {
  return (
    <div className="mt-flex">
      <Avarta />
      <div>
        <p>Tài khoản của</p>
        <p style={{ fontSize: "18px" }}>Trần Quốc khánh</p>
      </div>
    </div>
  );
}

export default Infomation;
