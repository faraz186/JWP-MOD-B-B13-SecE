import React from "react";
import { productData } from "../Data";
import Cards from "../Components/Cards/Cards";

const Home = () => {
  //   console.log(productData);
  return (
    <div>
      <h1>Home Page</h1>

      {productData.map((e, i) => {
        // console.log(e);
        return (
          <div key={i} style={{ display: "inline-block" }}>
            <Cards
              id={e.id}
              title={e.title}
              desc={e.description}
              img={e.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
