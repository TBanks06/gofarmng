import React from 'react'
import "./Header.css"
import bell from "../assets/Bell.png"
import cart from "../assets/cart.png"
// import Hamburger from "./HamburgerComponent"

const Header = () => {
  return (
    <div className='header-content'>
        <h3>GoFarmNG</h3>
        <div className="select">
            <select name="" id="">
                <option value="All-Categories">All Categories</option>
                <option value="Cereal">Cereal Crops</option>
                <option value="Fruits">Fruits</option>
                <option value="Tubers">Tubers</option>
                <option value="Jiuices">Juices</option>
                <option value="Bakery">Bakery</option>
                <option value="Spices">Spices</option>
                <option value="Seafoods">Sea Foods</option>
                <option value="Vegetables">Vegetables</option>
                <option value="dairy">Dairy</option>
                <option value="Beverages">Beverages</option>
                <option value="Meat">Meat</option>
            </select>
            <input className='srch' type="search"placeholder="  Search Products..."/>
            <i class="fa fa-search"></i>
           
        </div>
        <div className="icons">
            <img src={bell} alt=""/>
            <img src={cart} alt=""/>
            <p>User Icon</p>
            <p>Account Balance</p>
           {/* <div className="hamburger"><Hamburger/></div> */}
            
           
        </div>
         
    </div>
  )
}

export default Header
