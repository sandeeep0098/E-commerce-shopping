import React from 'react';
import Card from '../Card/Card';
import './FeaturedProducts.scss';

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      title: 'Product 1',
      price: 100,
      img: 'https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/11423668/pexels-photo-11423668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      title: 'Product 1',
      price: 100,
      img: 'https://images.pexels.com/photos/15451656/pexels-photo-15451656/free-photo-of-pensive-bearded-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      title: 'Product 1',
      price: 100,
      img: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      title: 'Product 1',
      price: 100,
      img: 'https://images.pexels.com/photos/3064589/pexels-photo-3064589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
