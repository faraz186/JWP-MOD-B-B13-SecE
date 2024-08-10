import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";   

const SingleProduct = () => {
  const { id } = useParams();

  const [singleData, setSingleData] = useState([]);

  useEffect(() => {
    getSingleData();
  }, []);

  const getSingleData = async () => {
    const fetchData = await fetch(`https://fakestoreapi.com/products/${id}`);
    const response = await fetchData.json();

    setSingleData([response]);
  };

  return (
    <div>
      {singleData?.map((e, i) => {
        return (
          <div key={i}>
            <img src={e.image} alt="" />
            <h1>{e.title}</h1>
            <h1>{e.description}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default SingleProduct;
