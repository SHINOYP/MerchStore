"use client";
import React, { useState } from "react";
import {
  DownOutlined,
  SmileOutlined,
  UserOutlined,
  InstagramOutlined,
  FacebookOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Dropdown, Space, Badge } from "antd";
import "./navbarStyle.scss";
import Link from "next/link";
import Cart from "../../Drawers/cart";
import SideMenu from "../../Drawers/Sidenav";
import Searchbar from "../../Drawers/SearchBar";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

const Navbar = () => {
  const [offer, setOffer] = useState(true);
  const [opencart, setOpenCart] = useState(false);
  const [openmenu, setOpenMenu] = useState(false);
  const [opensearch, setOpenSearch] = useState(false);

  const showCartDrawer = () => {
    setOpenCart(true);
  };

  const onCartClose = () => {
    setOpenCart(false);
  };
  const showMenuDrawer = () => {
    setOpenMenu(true);
  };

  const onMenuClose = () => {
    setOpenMenu(false);
  };

  const showSearchDrawer = () => {
    setOpenSearch(true);
  };

  const onSearchClose = () => {
    setOpenSearch(false);
  };
  return (
    <nav>
      {offer && offer ? (
        <>
          <div className="nav-offer">Free shipping on all orders over ₹699</div>
        </>
      ) : (
        ""
      )}
      <div className="nav-social">
        <div>
          <InstagramOutlined />
          <FacebookOutlined />
        </div>
        <span>
          <p>Crafted by Takara for the Takara</p>
          <a>Discover More</a>
        </span>
        {/* <div></div> */}
      </div>
      <hr color="#f2f2f2" />
      <div className="nav-main">
        <MenuOutlined
          className="nav-main-menu-btn"
          onClick={() => showMenuDrawer()}
        />
        <div className="nav-main-menu">
          <Link href={""}>Home</Link>
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Anime
                <DownOutlined style={{ fontSize: "60%" }} />
              </Space>
            </a>
          </Dropdown>
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Categories
                <DownOutlined style={{ fontSize: "60%" }} />
              </Space>
            </a>
          </Dropdown>
          <Link href={""}>Posters</Link>
        </div>
        <h1>Takara</h1>
        <div className="nav-main-cart">
          <SearchOutlined
            style={{ fontSize: "150%" }}
            onClick={() => showSearchDrawer()}
          />
          <UserOutlined style={{ fontSize: "150%" }} />
          <Badge count={5}>
            <ShoppingCartOutlined
              style={{ fontSize: "200%" }}
              onClick={() => showCartDrawer()}
            />
          </Badge>
        </div>
      </div>
      <hr color="#f2f2f2" />
      <SideMenu open={openmenu} onClose={onMenuClose} />
      <Cart open={opencart} onClose={onCartClose} />
      <Searchbar open={opensearch} onClose={onSearchClose} />
    </nav>
  );
};

export default Navbar;
