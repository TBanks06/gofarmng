import React from "react";
import banana from "../../assets/banana.svg";
import love from "../../assets/love.svg";
import stars from "../../assets/stars.svg";
import grape from "../../assets/grapes.svg";
import carrot from "../../assets/carrot.svg";
import lemmon from "../../assets/lemon.svg";
import Tomatoe from "../../assets/tomat.svg";
import APPLE from "../../assets/redApple.svg";
import guava from "../../assets/guava.svg";
import spawpaw from "../../assets/shortPawpaw.svg";
import pears from "../../assets/pears.svg";
import yellowOrange from "../../assets/yellowOrange.svg";
import bigApple from "../../assets/bigApple.svg";
import unripe from "../../assets/unripeMelon.svg";
import "./Fruit.css";

function Fruit() {
  return (
    <>
      <h3 className="Fruit-header">Fruits</h3>
      <div className="Fruit-parent">
        <div className="fruit">
          <div className="fruit-img">
            <img className="icon-fruit" src={love} alt="Love" />
            <img className="img-fruit" src={banana} alt="" />
          </div>
          <div>
            <div className="fruit-selling">
              <p className="fruit-name">Fresh Banana</p>
            </div>
            <div className="fruit-ratings">
              <img src={stars} alt="Ratings" />
              <span className="fruit-span">(12)</span>
            </div>
            <div className="fruit-block">
              <p className="fruit-price">
                #1,000
                <span className="fruit-pcs">/Pcs</span>
              </p>
            </div>
            <div className="fruit-minus">
              <button className="Fdecrement">-</button>2
              <button className="Fincrement">+</button>1
            </div>
            <div>
              <button className="fruit-button">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="fruit">
          <div className="fruit-img">
            <img className="icon-fruit" src={love} alt="Love" />
            <img className="img-fruit" src={grape} alt="" />
          </div>
          <div>
            <div className="fruit-selling">
              <p className="fruit-name">Fresh Grapes</p>
            </div>
            <div className="fruit-ratings">
              <img src={stars} alt="Ratings" />
              <span className="fruit-span">(12)</span>
            </div>
            <div className="fruit-block">
              <p className="fruit-price">
                #1,000
                <span className="fruit-pcs">/Pcs</span>
              </p>
            </div>
            <div className="fruit-minus">
              <button className="Fdecrement">-</button>2
              <button className="Fincrement">+</button>1
            </div>
            <div>
              <button className="fruit-button">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="fruit">
          <div className="fruit-img">
            <img className="icon-fruit" src={love} alt="Love" />
            <img className="img-fruit" src={carrot} alt="" />
          </div>
          <div>
            <div className="fruit-selling">
              <p className="fruit-name">Fresh Farm Carrot</p>
            </div>
            <div className="fruit-ratings">
              <img src={stars} alt="Ratings" />
              <span className="fruit-span">(12)</span>
            </div>
            <div className="fruit-block">
              <p className="fruit-price">
                #1,000
                <span className="fruit-pcs">/Pcs</span>
              </p>
            </div>
            <div className="fruit-minus">
              <button className="Fdecrement">-</button>2
              <button className="Fincrement">+</button>1
            </div>
            <div>
              <button className="fruit-button">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="fruit">
          <div className="fruit-img">
            <img className="icon-fruit" src={love} alt="Love" />
            <img className="img-fruit" src={lemmon} alt="" />
          </div>
          <div>
            <div className="fruit-selling">
              <p className="fruit-name">Fresh Farm Lemon</p>
            </div>
            <div className="fruit-ratings">
              <img src={stars} alt="Ratings" />
              <span className="fruit-span">(12)</span>
            </div>
            <div className="fruit-block">
              <p className="fruit-price">
                #1,000
                <span className="fruit-pcs">/Pcs</span>
              </p>
            </div>
            <div className="fruit-minus">
              <button className="Fdecrement">-</button>2
              <button className="Fincrement">+</button>1
            </div>
            <div>
              <button className="fruit-button">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <div className="Fruit-parent">
        <div className="fruit">
          <div className="fruit-img">
            <img className="icon-fruit" src={love} alt="Love" />
            <img className="img-fruit" src={Tomatoe} alt="Tomatoe" />
          </div>
          <div>
            <div className="fruit-selling">
              <p className="fruit-name">Fresh Farm Tomatoe</p>
            </div>
            <div className="fruit-ratings">
              <img src={stars} alt="Ratings" />
              <span className="fruit-span">(12)</span>
            </div>
            <div className="fruit-block">
              <p className="fruit-price">
                #1,000
                <span className="fruit-pcs">/Pcs</span>
              </p>
            </div>
            <div className="fruit-minus">
              <button className="Fdecrement">-</button>2
              <button className="Fincrement">+</button>1
            </div>
            <div>
              <button className="fruit-button">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="fruit">
          <div className="fruit-img">
            <img className="icon-fruit" src={love} alt="Love" />
            <img className="img-fruit" src={APPLE} alt="Apple" />
          </div>
          <div>
            <div className="fruit-selling">
              <p className="fruit-name">Fresh Farm Apple</p>
            </div>
            <div className="fruit-ratings">
              <img src={stars} alt="Ratings" />
              <span className="fruit-span">(12)</span>
            </div>
            <div className="fruit-block">
              <p className="fruit-price">
                #1,000
                <span className="fruit-pcs">/Pcs</span>
              </p>
            </div>
            <div className="fruit-minus">
              <button className="Fdecrement">-</button>2
              <button className="Fincrement">+</button>1
            </div>
            <div>
              <button className="fruit-button">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="fruit">
          <div className="fruit-img">
            <img className="icon-fruit" src={love} alt="Love" />
            <img className="img-fruit" src={guava} alt="guava" />
          </div>
          <div>
            <div className="fruit-selling">
              <p className="fruit-name">Fresh Farm Guava</p>
            </div>
            <div className="fruit-ratings">
              <img src={stars} alt="Ratings" />
              <span className="fruit-span">(12)</span>
            </div>
            <div className="fruit-block">
              <p className="fruit-price">
                #1,000
                <span className="fruit-pcs">/Pcs</span>
              </p>
            </div>
            <div className="fruit-minus">
              <button className="Fdecrement">-</button>2
              <button className="Fincrement">+</button>1
            </div>
            <div>
              <button className="fruit-button">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="fruit">
          <div className="fruit-img">
            <img className="icon-fruit" src={love} alt="Love" />
            <img className="img-fruit" src={spawpaw} alt="Pawpaw" />
          </div>
          <div>
            <div className="fruit-selling">
              <p className="fruit-name">Fresh Farm Pawpaw</p>
            </div>
            <div className="fruit-ratings">
              <img src={stars} alt="Ratings" />
              <span className="fruit-span">(12)</span>
            </div>
            <div className="fruit-block">
              <p className="fruit-price">
                #1,000
                <span className="fruit-pcs">/Pcs</span>
              </p>
            </div>
            <div className="fruit-minus">
              <button className="Fdecrement">-</button>2
              <button className="Fincrement">+</button>1
            </div>
            <div>
              <button className="fruit-button">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <div className="Fruit-parent">
        <div className="fruit">
          <div className="fruit-img">
            <img className="icon-fruit" src={love} alt="Love" />
            <img className="img-fruit" src={pears} alt="Pears" />
          </div>
          <div>
            <div className="fruit-selling">
              <p className="fruit-name">Fresh Farm Pears</p>
            </div>
            <div className="fruit-ratings">
              <img src={stars} alt="Ratings" />
              <span className="fruit-span">(12)</span>
            </div>
            <div className="fruit-block">
              <p className="fruit-price">
                #1,000
                <span className="fruit-pcs">/Pcs</span>
              </p>
            </div>
            <div className="fruit-minus">
              <button className="Fdecrement">-</button>2
              <button className="Fincrement">+</button>1
            </div>
            <div>
              <button className="fruit-button">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="fruit">
          <div className="fruit-img">
            <img className="icon-fruit" src={love} alt="Love" />
            <img className="img-fruit" src={yellowOrange} alt="Orange" />
          </div>
          <div>
            <div className="fruit-selling">
              <p className="fruit-name">Fresh Farm Orange</p>
            </div>
            <div className="fruit-ratings">
              <img src={stars} alt="Ratings" />
              <span className="fruit-span">(12)</span>
            </div>
            <div className="fruit-block">
              <p className="fruit-price">
                #1,000
                <span className="fruit-pcs">/Pcs</span>
              </p>
            </div>
            <div className="fruit-minus">
              <button className="Fdecrement">-</button>2
              <button className="Fincrement">+</button>1
            </div>
            <div>
              <button className="fruit-button">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="fruit">
          <div className="fruit-img">
            <img className="icon-fruit" src={love} alt="Love" />
            <img className="img-fruit" src={bigApple} alt="Apple" />
          </div>
          <div>
            <div className="fruit-selling">
              <p className="fruit-name">Fresh Farm Apple</p>
            </div>
            <div className="fruit-ratings">
              <img src={stars} alt="Ratings" />
              <span className="fruit-span">(12)</span>
            </div>
            <div className="fruit-block">
              <p className="fruit-price">
                #1,000
                <span className="fruit-pcs">/Pcs</span>
              </p>
            </div>
            <div className="fruit-minus">
              <button className="Fdecrement">-</button>2
              <button className="Fincrement">+</button>1
            </div>
            <div>
              <button className="fruit-button">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="fruit">
          <div className="fruit-img">
            <img className="icon-fruit" src={love} alt="Love" />
            <img className="img-fruit" src={unripe} alt="Melon" />
          </div>
          <div>
            <div className="fruit-selling">
              <p className="fruit-name">Fresh Farm Melon</p>
            </div>
            <div className="fruit-ratings">
              <img src={stars} alt="Ratings" />
              <span className="fruit-span">(12)</span>
            </div>
            <div className="fruit-block">
              <p className="fruit-price">
                #1,000
                <span className="fruit-pcs">/Pcs</span>
              </p>
            </div>
            <div className="fruit-minus">
              <button className="Fdecrement">-</button>2
              <button className="Fincrement">+</button>1
            </div>
            <div>
              <button className="fruit-button">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fruit;
