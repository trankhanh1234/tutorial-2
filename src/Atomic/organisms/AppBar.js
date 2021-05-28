import React from "react";
import Infomation from "../molecules/Infomation";

function AppBar(props) {
  return (
    <div className="row mt-3">
      <div className="col-md-4 col-lg-3">
        <Infomation></Infomation>
      </div>
      <div className="col-md-8 col-lg-9">
        <p className="fs-2 text-muted">Giỏ hàng</p>
      </div>
    </div>
  );
}

export default AppBar;
