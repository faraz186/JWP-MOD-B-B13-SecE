import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../Data";   

const Products = () => {
  const { id } = useParams();
  console.log(id);

  const filterData = productData.filter((e, i) => {   
    return e.id == id;   
  });

  console.log(filterData);   
  return (
    <div> 
      <h1>Product Page</h1>

      {filterData.map((e, i) => {
        return (
          <div key={i}>
            <img src={e.image} alt="" />     
            <h1>{e.title}</h1>
            <p>{e.description}</p>
          </div>   
        );
      })}
    </div>
  );
};

export default Products;
