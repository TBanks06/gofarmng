import React from 'react'
import "./SellersDashboard.css"
import Productbox from "../../assets/product-box.png"
import line1 from "../../assets/line1.png"
import line2 from "../../assets/line2.png"
import line3 from "../../assets/line3.png"
import line4 from "../../assets/line4.png"
import receipt from "../../assets/receipt-item.png"
import direct from "../../assets/direct-send.png"
import dolla from "../../assets/dollar-circle.png"
import arrowdown from "../../assets/arrow-down.png"
import arrowup from "../../assets/arrow-up.png"


const SellersDashboard = () => {
  return (
    <div className='Seller-dashboard'>
        <div className="chat">
            <h4>Overview</h4>
            <div className="overview-summary">
                <div className="sum1">
                    <img className='pro' src={Productbox}/>
                    <p className='total'> Total Products
                        <p className='bold'>3000</p>
                    </p>
                    <div className="stock">
                    <img src={line1} alt=""/>
                    <span className='increase'>+10%</span>
                    </div>
                </div>
                <div className="sum1">
                    <img className='pro1' src={receipt} alt=""/>
                    <p className='total'> Total Orders
                        <p className='bold'>1150</p>
                    </p>
                    <div className="stock">
                    <img src={line2} alt=""/>
                    <span className='increase'>+10%</span>
                    </div>
                </div>
                <div className="sum1">
                    <img className='pro2' src={direct} alt=""/>
                    <p className='total'> Total Sales
                        <p className='bold'>#140,650</p>
                    </p>
                    <div className="stock">
                    <img src={line3} alt=""/>
                    <span className='increas'>-10%</span>
                    </div>
                </div>
                <div className="sum1">
                    <img className='pro3' src={dolla} alt=""/>
                    <p className='total'> Total Expenses
                        <p className='bold'>#20,000</p>
                    </p>
                    <div className="stock">
                    <img src={line4} alt=""/>
                    <span className='increase'>+10%</span>
                    </div>
                </div>
                
            </div>
            <div className="recently">
                <p className='recent'>Recent Orders</p>
                <table>
                <tr className='headingg'>
                    <th>Order No</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
                <tr className='border1'>
                    <td>#13342</td>
                    <td>Farm Fresh Apple</td>
                    <td>20pcs</td>
                    <td>#5000</td>
                    <td> <button className='cancel'>Cancelled</button></td>
                </tr>
                <tr>
                    <td>#13343</td>
                    <td>Farm Fresh Orange</td>
                    <td>20pcs</td>
                    <td>#5000</td>
                    <td> <button className='complete'>Completed</button></td>
                </tr>
                <tr>
                    <td>#13344</td>
                    <td>Farm Fresh Apple</td>
                    <td>20pcs</td>
                    <td>#5000</td>
                    <td> <button className='complete'>Completed</button></td>
                </tr>
                <tr>
                    <td>#13345</td>
                    <td>Farm Fresh Orange</td>
                    <td>20pcs</td>
                    <td>#5000</td>
                    <td> <button className='pending'>Pending</button></td>
                </tr>
                </table>
                <div className="view">
                    <a href="">View All </a>
                </div>
            </div>
        </div>
        
        <div className="trx-history">
            <div className="balance">
                <p>Total Balance</p>
                <p className='amount'>#49,650.23</p>
            </div>
            <div className="depo-with">
                <div className="depo">
                   <img src={arrowdown} alt=""/> 
                   <p className='deposit'>Deposit</p>
                </div>
                <div className="withdraw">
                <img src={arrowup} alt=""/> 
                   <p className='withdraw'>Withdraw</p>
                </div>
            </div>
            <div className="history">
                <p className='trx'>Recent Transactions <br></br>
                <small className='date'>4th November, 2022</small>
                </p>
            </div>
            <div className="history-column">
                <div className="withdrawn">
                <img src={arrowup} alt=""/>
                <p>Funds Withdrawn <br></br>
                    <small>10:32am</small>
                </p>
                <p>#20,000</p>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default SellersDashboard
