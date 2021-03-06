import React from "react";
import PropTypes from "prop-types";

function DropDownItem({ text }) {
  return <button className="dropdown-item">{text}</button>;
}

export default DropDownItem;
DropDownItem.propTypes = {
  text: PropTypes.any,
  onClick: PropTypes.func,
};

DropDownItem.defaultProps = {
  text: "Trần Quốc Khánh",
};
