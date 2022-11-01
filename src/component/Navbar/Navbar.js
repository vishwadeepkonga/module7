import React from 'react'
import account from '../../Assets/Vector.png'
import search from '../../Assets/Vector 1.png'
import cart from '../../Assets/Vector 2.png'
import love from '../../Assets/Vector 3.png'
import { CounterContext } from "../CounterContext";



import './Navbar.css'


function Navbar(){
    const{counter}=React.useContext(CounterContext)
    return(
        <div className='navbar-comp'>
            <div className='navbar-left'>
                <div className='navbar-title'>
                <h3>AccioJob</h3>

                </div>
                <div className='navbar-main'>
                 <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Pages</li>
                 </ul>
                </div>
            </div>
            <div className='navbar-right'>
                <img src={account} alt='account' className='account-symbol'/>
                <p>Login / Register</p>
                <img src={search} alt='' className='search-bar'/>
                <div className='cart-orders'>
                <img src={cart} alt=''/>
                <span className='cart-counter'>{counter}</span>
                </div>
                <img src={love} alt='' className='fav-symbol' />
                <span className='fav-num'>1</span>

            </div>

        </div>
    )
}
export default Navbar