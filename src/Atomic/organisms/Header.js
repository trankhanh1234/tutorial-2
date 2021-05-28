import React from "react";
import { useHistory } from "react-router-dom";

import Logo from "../atoms/Logo";
import SpanTextWrap from "../atoms/SpanTextWrap";
import DropDownMenu from "../molecules/DropDownMenu";
import InputSearch from "../molecules/InputSearch";
import {
  Bell,
  Bank,
  Cart,
  Wallet,
  BoxArrowInLeft,
} from "react-bootstrap-icons";

const HeaderNavLeft = () => {
  const location = {
    note: "Hồ Chí Minh",
    menu: [{ text: "Hà Nội", icon: "" }, { text: "Hồ Chí Minh" }],
  };
  return (
    <>
      <div className="col-1"></div>
      <div className="col-2 mt-header-logo mt-header-navItem">
        <a className="navbar-brand" href="./index.html">
          <Logo></Logo>
        </a>
      </div>
      <div className="col-3 mt-header-navItem dropdown">
        <DropDownMenu menu={location.menu} note={location.note}></DropDownMenu>
      </div>
      <div className="col-6 mt-header-navItem">
        <InputSearch></InputSearch>
      </div>
    </>
  );
};
const HeaderNavRight = () => {
  let history = useHistory();

  const menuRight = {
    note: "Trần Quốc Khánh",
    menu: [
      { text: "Thông tin tài khoản", icon: <Bank /> },
      { text: "Ví", icon: <Wallet></Wallet> },
      { text: "Đăng Xuất", icon: <BoxArrowInLeft></BoxArrowInLeft> },
    ],
  };

  const handleClick = (item) => {
    history.push(item);
  };
  return (
    <>
      <div className="col-4 d-flex flex-row">
        <div className="col mt-header-navItem">
          <span onClick={() => handleClick("/giohang")}>
            <SpanTextWrap note={<Cart></Cart>}></SpanTextWrap>
          </span>
        </div>
        <div className="col mt-header-navItem">
          <SpanTextWrap note={<Bell></Bell>}></SpanTextWrap>
        </div>
      </div>
      <div className="col-5">
        <div className="col mt-header-navItem dropdown">
          <DropDownMenu
            menu={menuRight.menu}
            note={menuRight.note}
            icon
          ></DropDownMenu>
        </div>
      </div>
    </>
  );
};

function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-light bg-white header mt-header-header">
        <div className="container-fluid">
          <div className="row flex-grow-1 undefined">
            <div className="col-12 col-sm-8 col-md-8 mt-header">
              <HeaderNavLeft></HeaderNavLeft>
            </div>
            <div className="col-12 col-sm-4 col-md-4 mt-header">
              <HeaderNavRight></HeaderNavRight>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
