import React from "react";
import PropTypes from "prop-types";

function SpanTextWrap({ note }) {
  return <span className="mt-header-textWrap">{note}</span>;
}

export default SpanTextWrap;
SpanTextWrap.propTypes = {
  note: PropTypes.any,
};

SpanTextWrap.defaultProps = {
  note: "Trần Quốc Khánh",
};
