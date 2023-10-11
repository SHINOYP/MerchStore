import React, { useState } from "react";
import { Button, Drawer } from "antd";
const Cart = ({ open, onClose }) => {
  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement="right"
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
export default Cart;
