import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: 'https://www.pexels.com/photo/clothing-store-window-15271836/',
      img2: "https://www.google.com/search?q=shopping+model+images&sxsrf=APwXEddS_NvALP93Z32tMGAeDFo2GxoWWQ:1684285011661&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjB1sfOkvv-AhVScWwGHV5UDtoQ_AUoAXoECAEQAw&biw=1440&bih=821&dpr=1#imgrc=fd49upEPP7Lv2M",
      title: "Long Seelve Grapic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://www.myntra.com/shirts/herenow/herenow-men-black-slim-fit-floral-printed-casual-shirt/18060960/buy",
      img2: "https://www.myntra.com/tops/qomn/qomn-blue-print-mandarin-collar-empire-pure-cotton-longline-top/19524874/buy",
      title: "Long Seelve Grapic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://www.myntra.com/shirts/herenow/herenow-men-black-slim-fit-floral-printed-casual-shirt/18060960/buy",
      img2: "https://www.myntra.com/tops/qomn/qomn-blue-print-mandarin-collar-empire-pure-cotton-longline-top/19524874/buy",
      title: "Long Seelve Grapic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://www.myntra.com/shirts/herenow/herenow-men-black-slim-fit-floral-printed-casual-shirt/18060960/buy",
      img2: "https://www.myntra.com/tops/qomn/qomn-blue-print-mandarin-collar-empire-pure-cotton-longline-top/19524874/buy",
      title: "Long Seelve Grapic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];

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
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
