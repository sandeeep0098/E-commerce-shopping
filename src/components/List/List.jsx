import React from 'react';
import './List.scss';
import Card from '../Card/Card';

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

const List = () => {
  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
