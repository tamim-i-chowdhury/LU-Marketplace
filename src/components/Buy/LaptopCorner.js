import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const LaptopCorner = () => {
  return (
    <div>
      {/* Laptop Corner */}
      <div className="border-b-[1px] border-gray-500 mt-10 mb-5 ">
        <h1 className="text-center md:text-start text-3xl font-semibold text-gray-900 pb-2">
          Laptop Corner
        </h1>
      </div>
      <div className="grid gap-y-4 px-3 md:px-0 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4">
        {/* Product - 1 */}
        <div className="rounded-lg shadow-lg dark:bg-gray-800 border-2">
          <div className="px-4 py-2">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              Asus VivoBook 15 E510MA Intel Celeron N4020 15.6" FHD Laptop
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              quidem sequi illum facere recusandae voluptatibus
            </p>
          </div>

          <img
            className="object-cover w-full h-60 mt-2"
            src="https://www.startech.com.bd/image/cache/catalog/laptop/asus/vivobook-15-e510ma/vivobook-15-e510ma-0101-500x500.jpg"
            alt="Asus VivoBook 15 E510MA Intel Celeron N4020 15.6"
          />

          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-lg font-bold text-white">TK 35,500</h1>
            <p className="text-white text-md">30 minutes ago</p>
            <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
              Buy Now
            </button>
          </div>
        </div>

        {/* Product - 2 */}
        <div className="rounded-lg shadow-lg dark:bg-gray-800 border-2">
          <div className="px-4 py-2">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              HP 15s-eq2171AU Ryzen 3 5300U 15.6" FHD Laptop
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              quidem sequi illum facere recusandae voluptatibus
            </p>
          </div>

          <img
            className="object-cover w-full h-60 mt-2"
            src="https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/hp-15s/hp-15s-spruce-blue-02-500x500.jpg"
            alt="HP 15s-eq2171AU Ryzen 3 5300U 15.6"
          />

          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-lg font-bold text-white">TK 45,550</h1>
            <p className="text-white text-md">4 hours ago</p>
            <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
              Buy Now
            </button>
          </div>
        </div>

        {/* Product - 3 */}
        <div className="rounded-lg shadow-lg dark:bg-gray-800 border-2">
          <div className="px-4 py-2">
            <h1 className="text-xl font-bold text-gray-800  dark:text-white">
              MSI Modern 14 Ryzen 7 5700U 14" FHD Laptop
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              quidem sequi illum facere recusandae voluptatibus
            </p>
          </div>

          <img
            className="object-cover w-full h-60 mt-2"
            src="https://www.startech.com.bd/image/cache/catalog/laptop/msi/modern-15-a5m/modern-15-a5m-grey-01-500x500.jpg"
            alt="MSI Modern 14 Ryzen 7 5700U 14"
          />

          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-lg font-bold text-white">TK 55,000</h1>
            <p className="text-white text-md">5 hours ago</p>
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

export default LaptopCorner;
