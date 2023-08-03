import React from "react";
import { Link } from "react-router-dom";
import MobileCorner from "./MobileCorner";
import GadgetCorner from "./GadgetCorner";
import LaptopCorner from "./LaptopCorner";

const Buy = () => {
  return (
    <section className="container mx-auto">
      <MobileCorner></MobileCorner>
      <GadgetCorner></GadgetCorner>
      <LaptopCorner></LaptopCorner>

      {/* Best Places to sell your products */}
      <header className="dark:bg-gray-900">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full max-w-md"
                src="https://merakiui.com/images/components/Email-campaign-bro.svg"
                alt="Illustration Vector Art"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="text-center lg:text-end lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                  The Best Place To Sell Your{" "}
                  <span className="text-blue-500">Product</span>
                </h1>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Be the first guy to start making money!
                </p>

                <div className="mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                  <Link
                    to="/sell"
                    className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                  >
                    Sell Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Buy;
