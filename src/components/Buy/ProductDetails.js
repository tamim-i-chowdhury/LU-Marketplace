import React from "react";

const ProductDetails = () => {
  return (
    <div className="flex justify-center">
      <div className="card bg-base-700 shadow-xl w-96 md:w-1/3 my-16">
        <figure className="px-10 pt-10">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <h3>Price: 5000</h3>
          <p>Contact Information</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
