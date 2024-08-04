import React from "react";
import { useNavigate } from "react-router-dom";
import { productData } from "../data";
import Card from "../Components/Card/Cards";
const Home = () => {
  // const naivgate = useNavigate();

  // let obj = {
  //   name: "faraz",
  //   city: "karachi",
  // };

  return (
    <div>
      <h1>Home Page</h1>

      {productData.map((e, i) => {
        return (
          <div style={{ display: "inline-block" }}>
            <Card
              id={e.id}
              title={e.title}
              desc={e.description}
              image={e.image}
              key={i}
            />
          </div>
        );
      })}

      {/* <button onClick={() => 
        naivgate("/products", { state: obj })}>
        Go to product page
      </button> */}
    </div>
  );
};

export default Home;
