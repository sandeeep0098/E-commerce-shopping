import React from 'react';
import Card from '../Card/Card';
import './FeaturedProducts.scss';

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      title: 'Product 1',
      price: 100,
      img: 'https://images.pexels.com/photos/17318624/pexels-photo-17318624/free-photo-of-aerial-view-of-zinciriye-medresesi-mardin-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      img2: 'https://images.pexels.com/photos/16942021/pexels-photo-16942021/free-photo-of-wood-wall-garden-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      title: 'Product 1',
      price: 100,
      img: 'https://images.pexels.com/photos/17318624/pexels-photo-17318624/free-photo-of-aerial-view-of-zinciriye-medresesi-mardin-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      title: 'Product 1',
      price: 100,
      img: 'https://images.pexels.com/photos/17318624/pexels-photo-17318624/free-photo-of-aerial-view-of-zinciriye-medresesi-mardin-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      title: 'Product 1',
      price: 100,
      img: 'https://images.pexels.com/photos/17318624/pexels-photo-17318624/free-photo-of-aerial-view-of-zinciriye-medresesi-mardin-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
          consequuntur fugit qui porro reprehenderit repellat architecto
          pariatur nesciunt maxime cumque, saepe velit explicabo quibusdam.
          Omnis molestias esse eos soluta qui!
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
