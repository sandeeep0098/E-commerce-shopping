const data = [
  {
    id: "p1",
    img: "https://images.pexels.com/photos/11423668/pexels-photo-11423668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Long Seelve Grapic Top",
    isNew: true,
    oldPrice: 1299,
    price: 999,
  },
  {
    id: 'p2',
    img: "https://images.pexels.com/photos/15451656/pexels-photo-15451656/free-photo-of-pensive-bearded-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Turtle-Neck Full Seleve Shirt",
    isNew: true,
    oldPrice: 999,
    price: 599,
  },
  {
    id: 'p3',
    img: "",
    title: "Blue Denim-Jacket",
    isNew: true,
    oldPrice: 899,
    price: 699,
  },
  {
    id: 'p4',
    img: "https://images.pexels.com/photos/3064589/pexels-photo-3064589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Blue Denim Ripped-Jeans",
    isNew: true,
    oldPrice: 1899,
    price: 1499,
  },
];

import React, { useState } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import { useEffect } from "react";

const FeaturedProducts = ({ type }) => {
  const [featuredData, setFeaturedData] = useState([]);

  useEffect(() => {
    const fetchFeaturedDAta = async () => {
      const response = await fetch(
        "https://lamastore-9e4d0-default-rtdb.firebaseio.com/featuredData.json"
      );
      const responseData = await response.json();

      const loadedFeaturedData = [];

      for (const key in responseData) {
        loadedFeaturedData.push({
          id: key,
          img: responseData[key].img,
          img2: responseData[key].img2,
          isNew: responseData[key].isNew,
          oldPrice: responseData[key].oldPrice,
          price: responseData[key].price,
        });
        setFeaturedData(loadedFeaturedData);
      }
    };
    fetchFeaturedDAta();
  });

  const featuredDataList = featuredData.map((item) => (
    <Card item={item} key={item.id} />
  ));

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1> {type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, eaque voluptatum. Repellat illo voluptas odio quidem
          velit laboriosam? Esse ullam laborum facere sed labore repellendus
          velit assumenda ad vitae impedit?
        </p>
      </div>
      <div className="bottom">{featuredDataList}</div>
    </div>
  );
};

export default FeaturedProducts;
