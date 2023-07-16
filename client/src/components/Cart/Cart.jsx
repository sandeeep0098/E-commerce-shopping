import React from 'react';
import './Cart.scss';
import { DeleteOutline } from '@mui/icons-material';

const data = [
  {
    id: 3,
    title: 'Product 1',
    price: 100,
    img: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: 'lorem ipsum dolor sit amet, consectetur',
    isNew: false,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 4,
    title: 'Product 1',
    price: 100,
    img: 'https://images.pexels.com/photos/3064589/pexels-photo-3064589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: 'lorem ipsum dolor sit amet, consectetur',
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
];

const Cart = () => {
  return (
    <div className="cart">
      {data.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutline className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$999</span>
      </div>
      <button>Proceed To Checkout</button>
      <span className="reset">Reset</span>
    </div>
  );
};

export default Cart;
