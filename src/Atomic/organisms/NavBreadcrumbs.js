import React from "react";
import { HouseDoor } from "react-bootstrap-icons";
function NavBreadcrumbs(props) {
  return (
    <nav className="navbar">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <div className="d-flex align-items-center">
            <HouseDoor></HouseDoor>
            <p>Trang chủ</p>
          </div>
        </li>
        <li className="breadcrumb-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </li>
        <li className="breadcrumb-item">
          <div className="d-flex align-items-center">
            <p className="d-flex align-items-center active">Giỏ hàng</p>
          </div>
        </li>
      </ol>
    </nav>
  );
}

export default NavBreadcrumbs;
