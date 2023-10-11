import React, { useState } from "react";
import { Button, Drawer } from "antd";
const Sidenav = ({ open, onClose }) => {
  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement="left"
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
export default Sidenav;
