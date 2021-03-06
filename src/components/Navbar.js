import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  QuestionOutlined,
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import icon from "../images/crypto.png";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/" onClick={props.toggleDark}>
            Robin Noob
          </Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        
        <Menu theme="dark">
          
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">UserProfile</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
          <Menu.Item icon={<QuestionOutlined />}>
            <Link to="/quiz">CryptoQuiz</Link>
          </Menu.Item>
          
          <Menu.Item icon={<UserOutlined />}>
            <Link to="/profile">Trading Simulation</Link>
          </Menu.Item>
          <Menu.Item icon={<LoginOutlined />}>
            <Link to="/login">Log In</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
