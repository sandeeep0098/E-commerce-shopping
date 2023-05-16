import React from "react";
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Acessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Store</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            optio omnis voluptate facere soluta nulla sit ratione autem deleniti
            porro, ex eum earum illo tenetur temporibus, quae animi corrupti
            quas?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quam
            fuga itaque fugit numquam dolore expedita est harum minima quasi
            voluptatibus explicabo id reprehenderit dolorum, qui repellat
            voluptatem tempora velit.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">LAMASTORE</span>
          <span className="copyright">
            © Copyright 2023. All Right Reserved
          </span>
        </div>
        <div className="right">
            <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
