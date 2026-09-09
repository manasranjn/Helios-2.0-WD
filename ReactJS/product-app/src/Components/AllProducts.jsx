import React, { useState, useEffect } from "react";
import axios from "axios";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    // console.log("Res", response);

    const data = await response.json();
    // console.log("Data...", data.products);

    setAllProducts(data.products);
  };

  const getProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        // console.log(res);
        setAllProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   getAllProducts();

  useEffect(() => {
    // getAllProducts();
    getProducts();
    console.log("Hello");
    console.log("useEffect");
  }, []);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold">All Products</h1>

      <div className="grid grid-cols-4 gap-6 p-10">
        {allProducts.map((item) => (
          <div className="bg-slate-300 rounded-md p-4" key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.images[0]} alt="" className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
