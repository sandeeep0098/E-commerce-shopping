import React, { useState } from 'react';
import './product.scss';
import {
  AddShoppingCart,
  BalanceOutlined,
  FavoriteBorder,
} from '@mui/icons-material';

const images = [
  'https://images.unsplash.com/photo-1625910513399-c9fcba54338c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1625910513413-c23b8bb81cba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
];

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImage(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImage(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          magnam recusandae maiores illum. Iste tempora sit iure itaque saepe
          molestiae officiis ipsum, cum natus blanditiis in corporis sint,
          fugiat quidem?
        </p>
        <div className="quantity">
          <button
            onClick={() =>
              quantity === 0 ? '' : setQuantity((prev) => prev - 1)
            }
          >
            -
          </button>
          {quantity}
          <button
            onClick={() =>
              quantity === 5 ? '' : setQuantity((prev) => prev + 1)
            }
          >
            +
          </button>
        </div>
        <button className="add">
          <AddShoppingCart /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorder /> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceOutlined /> ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
