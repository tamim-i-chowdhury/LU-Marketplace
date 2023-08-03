import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const GadgetCorner = () => {
  return (
    <div>
      {/* Gadget Corner */}
      <div className="border-b-[1px] border-gray-500 mt-10 mb-5 ">
        <h1 className="text-center md:text-start text-3xl font-semibold text-gray-900 pb-2">
          Gadget Corner
        </h1>
      </div>
      <div className="grid gap-y-4 px-3 md:px-0 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4">
        {/* Product - 1 */}
        <div className="rounded-lg shadow-lg dark:bg-gray-800 border-2">
          <div className="px-4 py-2">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              Logitech G502 HERO Gaming Mouse
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              quidem sequi illum facere recusandae voluptatibus
            </p>
          </div>

          <img
            className="object-cover w-full h-60 mt-2"
            src="https://www.vibegaming.com.bd/wp-content/uploads/2021/10/Untitled-1-01-26-scaled.jpg"
            alt="Logitech G502 HERO High Performance Wired Gaming Mouse"
          />

          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-lg font-bold text-white">TK 2500</h1>
            <p className="text-white text-md">45 minutes ago</p>
            <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
              Buy Now
            </button>
          </div>
        </div>

        {/* Product - 2 */}
        <div className="rounded-lg shadow-lg dark:bg-gray-800 border-2">
          <div className="px-4 py-2">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              A4 Tech KRS-83 Black Wired
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              quidem sequi illum facere recusandae voluptatibus
            </p>
          </div>

          <img
            className="object-cover w-full h-60 mt-2"
            src="https://static-01.daraz.com.bd/p/mdc/7240a1c35f2bb3e3f773138293524ce0.jpg"
            alt="A4 Tech KRS-83 Black Wired"
          />

          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-lg font-bold text-white">TK 550</h1>
            <p className="text-white text-md">1 hour ago</p>
            <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
              Buy Now
            </button>
          </div>
        </div>

        {/* Product - 3 */}
        <div className="rounded-lg shadow-lg dark:bg-gray-800 border-2">
          <div className="px-4 py-2">
            <h1 className="text-xl font-bold text-gray-800  dark:text-white">
              Philips Wireless Headphones
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              quidem sequi illum facere recusandae voluptatibus
            </p>
          </div>

          <img
            className="object-cover w-full h-60 mt-2"
            src="https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_KE?wid=840&hei=720&$jpglarge$"
            alt="Philips Wireless Headphones"
          />

          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-lg font-bold text-white">TK 4500</h1>
            <p className="text-white text-md">3 hours ago</p>
            <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4 flex w-36 justify-around "
        >
          View All{" "}
          <HiArrowLongRight className="mr-2 text-2xl"></HiArrowLongRight>
        </button>
      </div>
    </div>
  );
};

export default GadgetCorner;
