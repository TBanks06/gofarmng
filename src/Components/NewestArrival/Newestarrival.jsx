import React, { useState, useEffect } from "react";
import coconnut from "../images/coconnut.svg";
import watermelon from "../images/watermelon.svg";
import pineapple from "../images/pineapple.svg";
import whiteLove from "../images/whiteLove.svg";
import pawpaw from "../images/pawpaw.svg";
import stars from "../images/stars.svg";
import "./NewestArrival.css";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

function NewestArrival() {
  // PUT UR URL INTO THIS FUNCTION
  const getData = async () => {
    const res = await axios.get("https://gofarm-ng.vercel.app/api/v1/findall");
    return res;
  };

  //USEQUERY TO GET DATA FROM BACKEND
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getData,
  });

  return (
    <>
      <h3 className="newest-header">Newest Arrival</h3>
      <div className="newest-fruits">
        <div className="newest-fruit">
          <div className="newest-img">
            <img className="icon" src={whiteLove} alt="Love" />
            <img src={coconnut} alt="Coconut" />
          </div>
          <div>
            <div>
              <p className="newest-name">Farm Fresh Coconut</p>
            </div>
            <div className="newest-ratings">
              <img src={stars} alt="Ratings" /> <span>(12)</span>
            </div>
            <div>
              <p className="newest-price">
                #1000
                <span className="price-pcs">/Pcs</span>
              </p>
            </div>
            <div className="plus-minus">
              <button className="decrement">-</button>2
              <button className="increment">+</button>1
            </div>
            <div>
              <button className="cart-button">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="newest-fruit">
          <div className="newest-img">
            <img className="icon" src={whiteLove} alt="Love" />
            <img src={watermelon} alt="Coconut" />
          </div>
          <div>
            <div>
              <p className="newest-name">Farm Fresh Coconut</p>
            </div>
            <div className="newest-ratings">
              <img src={stars} alt="Ratings" /> <span>(12)</span>
            </div>
            <div>
              <p className="newest-price">
                #1000
                <span className="price-pcs">/Pcs</span>
              </p>
            </div>
            <div className="plus-minus">
              <button className="decrement">-</button>2
              <button className="increment">+</button>1
            </div>
            <div>
              <button className="cart-button">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="newest-fruit">
          <div className="newest-img">
            <img className="icon" src={whiteLove} alt="Love" />
            <img src={pineapple} alt="Coconut" />
          </div>
          <div>
            <div>
              <p className="newest-name">Farm Fresh Coconut</p>
            </div>
            <div className="newest-ratings">
              <img src={stars} alt="Ratings" /> <span>(12)</span>
            </div>
            <div>
              <p className="newest-price">
                #1000
                <span className="price-pcs">/Pcs</span>
              </p>
            </div>
            <div className="plus-minus">
              <button className="decrement">-</button>2
              <button className="increment">+</button>1
            </div>
            <div>
              <button className="cart-button">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="newest-fruit">
          <div className="newest-img">
            <img className="icon" src={whiteLove} alt="Love" />
            <img src={pawpaw} alt="Coconut" />
          </div>
          <div>
            <div>
              <p className="newest-name">Farm Fresh Coconut</p>
            </div>
            <div className="newest-ratings">
              <img src={stars} alt="Ratings" /> <span>(12)</span>
            </div>
            <div>
              <p className="newest-price">
                #1000
                <span className="price-pcs">/Pcs</span>
              </p>
            </div>
            <div className="plus-minus">
              <button className="decrement">-</button>2
              <button className="increment">+</button>1
            </div>
            <div>
              <button className="cart-button">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <div className="newest-fruits">
        <div className="newest-fruit">
          <div className="newest-img">
            <img className="icon" src={whiteLove} alt="Love" />
            <img src={coconnut} alt="Coconut" />
          </div>
          <div>
            <div>
              <p className="newest-name">Farm Fresh Coconut</p>
            </div>
            <div className="newest-ratings">
              <img src={stars} alt="Ratings" /> <span>(12)</span>
            </div>
            <div>
              <p className="newest-price">
                #1000
                <span className="price-pcs">/Pcs</span>
              </p>
            </div>
            <div className="plus-minus">
              <button className="decrement">-</button>2
              <button className="increment">+</button>1
            </div>
            <div>
              <button className="cart-button">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="newest-fruit">
          <div className="newest-img">
            <img className="icon" src={whiteLove} alt="Love" />
            <img src={watermelon} alt="Coconut" />
          </div>
          <div>
            <div>
              <p className="newest-name">Farm Fresh Coconut</p>
            </div>
            <div className="newest-ratings">
              <img src={stars} alt="Ratings" /> <span>(12)</span>
            </div>
            <div>
              <p className="newest-price">
                #1000
                <span className="price-pcs">/Pcs</span>
              </p>
            </div>
            <div className="plus-minus">
              <button className="decrement">-</button>2
              <button className="increment">+</button>1
            </div>
            <div>
              <button className="cart-button">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="newest-fruit">
          <div className="newest-img">
            <img className="icon" src={whiteLove} alt="Love" />
            <img src={pineapple} alt="Coconut" />
          </div>
          <div>
            <div>
              <p className="newest-name">Farm Fresh Coconut</p>
            </div>
            <div className="newest-ratings">
              <img src={stars} alt="Ratings" /> <span>(12)</span>
            </div>
            <div>
              <p className="newest-price">
                #1000
                <span className="price-pcs">/Pcs</span>
              </p>
            </div>
            <div className="plus-minus">
              <button className="decrement">-</button>2
              <button className="increment">+</button>1
            </div>
            <div>
              <button className="cart-button">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="newest-fruit">
          <div className="newest-img">
            <img className="icon" src={whiteLove} alt="Love" />
            <img src={pawpaw} alt="Coconut" />
          </div>
          <div>
            <div>
              <p className="newest-name">Farm Fresh Coconut</p>
            </div>
            <div className="newest-ratings">
              <img src={stars} alt="Ratings" /> <span>(12)</span>
            </div>
            <div>
              <p className="newest-price">
                #1000
                <span className="price-pcs">/Pcs</span>
              </p>
            </div>
            <div className="plus-minus">
              <button className="decrement">-</button>2
              <button className="increment">+</button>1
            </div>
            <div>
              <button className="cart-button">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button className="view-btn">View More</button>
      </div>
    </>
  );
}

export default NewestArrival;
