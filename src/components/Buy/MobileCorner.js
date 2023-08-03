import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const MobileCorner = () => {
  return (
    <div>
      {/* Mobile Corner */}
      <div className="border-b-[1px] border-gray-500 mt-10 mb-5 ">
        <h1 className="text-center md:text-start text-3xl font-semibold text-gray-900 pb-2">
          Mobile Corner
        </h1>
      </div>
      <div className="grid gap-y-4 px-3 md:px-0 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4">
        {/* Product - 1 */}
        <div className="rounded-lg shadow-lg dark:bg-gray-800 border-2">
          <div className="px-4 py-2">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              iPhone XS
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              quidem sequi illum facere recusandae voluptatibus
            </p>
          </div>

          <img
            className="object-cover w-full h-60 mt-2"
            src="https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/gallery_adv/public/2018/10/iphone_xs_home_screen.jpg?itok=mRkHxPDy"
            alt="NIKE AIR"
          />

          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-lg font-bold text-white">TK 20,990</h1>
            <p className="text-white text-md">2 hours ago</p>
            <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
              Buy Now
            </button>
          </div>
        </div>

        {/* Product - 2 */}
        <div className="rounded-lg shadow-lg dark:bg-gray-800 border-2">
          <div className="px-4 py-2">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              Samsung Galaxy Note 10
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              quidem sequi illum facere recusandae voluptatibus
            </p>
          </div>

          <img
            className="object-cover w-full h-60 mt-2"
            src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2019/08/galaxynote10edited-31-920x613.jpg"
            alt="NIKE AIR"
          />

          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-lg font-bold text-white">TK 25550</h1>
            <p className="text-white text-md">5 hours ago</p>
            <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
              Buy Now
            </button>
          </div>
        </div>

        {/* Product - 3 */}
        <div className="rounded-lg shadow-lg dark:bg-gray-800 border-2">
          <div className="px-4 py-2">
            <h1 className="text-xl font-bold text-gray-800  dark:text-white">
              Xiaomi Poco X3 Pro
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              quidem sequi illum facere recusandae voluptatibus
            </p>
          </div>

          <img
            className="object-cover w-full h-60 mt-2"
            src="https://root-nation.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/04/poco-x3-pro-101.jpg.webp"
            alt="Xiaomi Poco X3 Pro"
          />
          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-lg font-bold text-white">TK 12500</h1>
            <p className="text-white text-md">7 hours ago</p>
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

export default MobileCorner;
