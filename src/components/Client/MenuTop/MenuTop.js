import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import Logo from "../../../assets/img/png/poster3.png";

import "./MenuTop.scss";

export default function MenuTop() {
  return (
    <Menu className="menu-top-client" mode="horizontal">
      <Menu.Item key={"/"} className="menu-top-client__logo">
        <Link to="/">
          <img src={Logo} alt="TheBackstreetNativos22" />
        </Link>
      </Menu.Item>
      <Menu.Item key="/">
        <Link to={"/"}>Home</Link>
      </Menu.Item>
      <Menu.Item key="/blog">
        <Link to={"/blog"}>Blog</Link>
      </Menu.Item>
      <Menu.Item key="/admin/login">
        <Link to={"/admin/login"}>Sign In</Link>
      </Menu.Item>
    </Menu>
  );
}
