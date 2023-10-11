import React, { useState } from "react";
import { Button, Drawer } from "antd";
const Searchbar = ({ open, onClose }) => {
  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement="top"
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default Searchbar;
