import React, { useEffect, useState } from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = () => {
  const [featuredData, setFeaturedData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchFeaturedDAta = async () => {
      const respone = await fetch(
        "https://lamastore-9e4d0-default-rtdb.firebaseio.com/FeaturedData.json"
      );

      if (!respone.ok) {
        throw new Error("Something Went Wrong!");
      }
      const responseData = await respone.json();

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
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="loading">
        <p>Fetching Data From Backend....</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className="error">
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <div className="list">
      {featuredData?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
