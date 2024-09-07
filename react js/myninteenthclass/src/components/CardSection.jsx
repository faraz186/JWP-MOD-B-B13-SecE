import React from "react";

const CardSection = () => {
  return (
    <>
      <div className="w-[800px]  mx-auto">
        <h1 className="text-center">Our Products</h1>
      </div>

      <div className="w-[800px] text-center grid grid-cols-4 gap-6 mx-auto">
        <div className="shadow-lg">
          <div className="overflow-hidden">
            <img
              src="https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?cs=srgb&dl=pexels-pixabay-290275.jpg&fm=jpg"
              alt=""
              className="hover:scale-125  duration-1000 "
            />
          </div>
          <h3>Our Building</h3>
          <p className="text-[10px] py-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
            sequi!
          </p>
        </div>
        <div className="shadow-lg">
          <img
            src="https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?cs=srgb&dl=pexels-pixabay-290275.jpg&fm=jpg"
            alt=""
          />
          <h3>Our Building</h3>
          <p className="text-[10px]  py-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
            sequi!
          </p>
        </div>
        <div className="shadow-lg">
          <img
            src="https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?cs=srgb&dl=pexels-pixabay-290275.jpg&fm=jpg"
            alt=""
          />
          <h3>Our Building</h3>
          <p className="text-[10px]  py-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
            sequi!
          </p>
        </div>
        <div className="shadow-lg">
          <img
            src="https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?cs=srgb&dl=pexels-pixabay-290275.jpg&fm=jpg"
            alt=""
          />
          <h3>Our Building</h3>
          <p className="text-[10px]  py-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
            sequi!
          </p>
        </div>
      </div>
    </>
  );
};

export default CardSection;
