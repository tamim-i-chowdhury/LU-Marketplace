import React, { useState } from "react";

const Sell = () => {
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  const handleAddUser = (event) => {
    event.preventDefault();
    // console.log("Add User Fired");
    const form = event.target;
    const productName = form.productName.value;
    const brandName = form.brand.value;
    const productPrice = form.price.value;
    const sellerName = form.sellerName.value;
    const sellerContactNumber = form.phoneNumber.value;
    const productInfo = form.productInfo.value;
    form.reset();
  };

  return (
    <div>
      <section className="dark:bg-gray-900">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full max-w-md"
                src="https://merakiui.com/images/components/Email-campaign-bro.svg"
                alt="Illustration Vector Art"
              />
            </div>
            <section className="bg-white dark:bg-gray-900">
              <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  Sell Your Product
                </h2>
                <form onSubmit={handleAddUser}>
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Product Name
                      </label>
                      <input
                        type="text"
                        name="productName"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="brand"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Brand
                      </label>
                      <input
                        type="text"
                        name="brand"
                        id="brand"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Product brand"
                        required=""
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Taka"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Category
                      </label>
                      <select
                        id="category"
                        value={selected}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        <option selected="">Select a category</option>
                        <option value="laptop">Laptop/Monitor/PC</option>
                        <option value="getget">Gadget</option>
                        <option value="phone">Phone</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="item-weight"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Add Photo
                      </label>
                      <input
                        type="file"
                        name="photo"
                        id="photo"
                        className="p-2 w-11/12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="brand"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="sellerName"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="contact-number"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your Contact Number
                      </label>
                      <input
                        type=""
                        name="phoneNumber"
                        id="phone-number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Phone Number"
                        required=""
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Product Description
                      </label>
                      <textarea
                        id="description"
                        name="productInfo"
                        rows="4"
                        className="block p-2 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Your description here"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    value="addUser"
                    className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-700"
                  >
                    Add product
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sell;
