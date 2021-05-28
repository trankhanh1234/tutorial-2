import React from "react";
import {
  InfoCircle,
  Cart,
  CardImage,
  CreditCard,
  Gift,
  Key,
} from "react-bootstrap-icons";
import MenItem from "../atoms/MenItem";
function MenuList(props) {
  const listMenu = [
    {
      label: "Thông tin tài khoản",
      icon: <InfoCircle></InfoCircle>,
    },
    {
      label: "Giỏ Hàng",
      icon: <Cart></Cart>,
    },
    {
      label: "Bộ sưu Tập",
      icon: <CardImage></CardImage>,
    },
    {
      label: "Ví của tôi",
      icon: <CreditCard></CreditCard>,
    },
    {
      label: "Đổi quà tặng",
      icon: <Gift></Gift>,
    },
    {
      label: "Đổi Mật Khẩu",
      icon: <Key></Key>,
    },
  ];
  return (
    <>
      {listMenu.map((item, index) => (
        <div className="p-2 mt-menu-item" key={`menu-${item.label}`}>
          <MenItem icon={item.icon} label={item.label}></MenItem>
        </div>
      ))}
    </>
  );
}

export default MenuList;
