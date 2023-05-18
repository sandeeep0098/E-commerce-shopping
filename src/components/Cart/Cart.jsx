import React from "react";
import "./Cart.scss";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Seelve Grapic T-shirt",
      desc: "Long Seelve Grapic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Long Seelve Grapic T-shirt",
      title: "Long Seelve Grapic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your Cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlineOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>Proceed To Checkout</button>

      <span className="reset">Reset-Cart</span>
    </div>
  );
};

export default Cart;
