import React, { useState, useEffect } from "react";
import "./ExploreCategories.css";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

// const url = "https://gofarm-ng.vercel.app/api/v1/findall";

// const allCategories = [
//   "all",
//   ...new Set(newProduct.map((commodity) => commodity.category)),
// ];

function ExploreCategories() {
  // THE FUNCTION FOR THE ONCLICK EVENT
  const exploreCategoriesEvent = (e) => {
    e.preventDefault();
  };

  const getData = async () => {
    const res = await axios.get(
      "https://gofarm-ng.vercel.app/api/v1/find/bakery"
    );
    return res;
    console.log(res);
  };

  //USEQUERY TO GET DATA FROM BACKEND
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getData,
  });

  return (
    <>
      <h3 className="explore-header">Explore Popular Categories</h3>
      <div className="explore-btn">
        <button className="ebtn" onClick={exploreCategoriesEvent}>
          Cereal Crops
        </button>

        <button className="ebtn">Fruits</button>
        <button className="ebtn">Tubers</button>
        <button className="ebtn">Juices</button>
      </div>
      <div className="explore-btn" onClick={exploreCategoriesEvent}>
        <button className="ebtn">Bakery</button>
        <button className="ebtn">Spices</button>
        <button className="ebtn">Sea Foods</button>
        <button className="ebtn">Vegetables</button>
      </div>
      <div className="explore-btn1" onClick={exploreCategoriesEvent}>
        <button className="ebtn">Diary</button>
        <button className="ebtn">Beverages</button>
        <button className="ebtn">Meat</button>
      </div>

      {data?.data?.data?.map((el) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>{el.category}</h1>
            <div>
              <img
                src={el.productPicture}
                alt=""
                style={{
                  width: "5rem",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ExploreCategories;
