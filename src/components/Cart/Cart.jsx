import React, { useState } from "react";
import "./Cart.scss";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Checkout from "../Checkout/Checkout";

const Cart = () => {
  const [isCheckout, setIsCheckout] = useState(false);
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      title: "Blue Denim Jacket",
      desc: "Women's trucker denim jacket made from cotton-stretch fabric. Perfect for a smart-casual look ",

      price: 499,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Fabric has some stretch,and it's soft and comfortable",
      title: "Long Seelve Grapic T-shirt",
      isNew: true,

      price: 499,
    },
  ];

  const orderHandler = () => {
    setIsCheckout((e) => !isCheckout);
  };

  return (
    <div className="cart">
      <h1>Products in your Cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ₹{item.price}</div>
          </div>
          <DeleteOutlineOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹998</span>
      </div>
      <button onClick={orderHandler}>Proceed To Checkout</button>
      {isCheckout && <Checkout />}
      {!isCheckout && <span className="reset">Reset-Cart</span>}
    </div>
  );
};

export default Cart;
