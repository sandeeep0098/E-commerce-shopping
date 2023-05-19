import React, { useState } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import { useEffect } from "react";

const FeaturedProducts = ({ type }) => {
  const [featuredData, setFeaturedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchFeaturedDAta = async () => {
      const response = await fetch(
        "https://lamastore-9e4d0-default-rtdb.firebaseio.com/FeaturedData.json"
      );
      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }
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
          title: responseData[key].title,
        });
        setFeaturedData(loadedFeaturedData);
        setIsLoading(false);
      }
    };
    fetchFeaturedDAta().catch((error) => {
      setHttpError(error.message);
      setIsLoading(false);
    });
  });

  if (isLoading) {
    return (
      <section className="loading">
        <p>Fetching Data From Backend.....</p>
      </section>
    );
  }
  if (httpError) {
    return <section className="error">{httpError}</section>;
  }

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
