import React, { Component } from 'react'
import facebook from './fb.png'
import insta from './insta.png'
import twitter from './twitter.png'
import './Footer.css'

function Footer(){  
    const[email,setEmail]=React.useState('')


    const handleemail=(e)=>{
            setEmail(e.target.value)
    }
const fetchApi=(e)=>{
e.preventDefault();
fetch('https://module-test-2fb91-default-rtdb.firebaseio.com/email.json',
{
    method:"POST",
    headers:{'Content-Type':'application/json'},
body:JSON.stringify({
    email: email
})
}).then(res=>res.json())
.then(res=>console.log(res))
console.log(email);

setEmail("")

}

    return(
        <div className='footer'>
         <div className='top-footer'>
            <h3 className='title'>Acciojob</h3> 
            <div className='icons'>
                <img src={facebook} className='fb'/>
                <img src={insta} className='fb'/>
                <img src={twitter} className='fb'/>


            </div>
         </div>
         <hr className='hr'></hr>
         <div className='footer-bottom'>
            <div className='footer-bottom-1'>
                 <h5>Company info</h5>
                 <p>About Us</p>
                 <p>Carrier</p>
                 <p>We are hiring</p>
                 <p>Blog</p>
            </div>
            <div className='footer-bottom-1'>
                 <h5>Legal</h5>
                 <p>About Us</p>
                 <p>Carrier</p>
                 <p>We are hiring</p>
                 <p>Blog</p>
            </div>
            <div className='footer-bottom-1'>
                 <h5>Features</h5>
                 <p>Business Marketing</p>
                 <p>user Analytics</p>
                 <p>Live Chat</p>
                 <p>Unlimited Support</p>
            </div>
            <div className='footer-bottom-1'>
                 <h5>Resources</h5>
                 <p>IOS & Android</p>
                 <p>Watch a Demo</p>
                 <p>Customers</p>
                 <p>API</p>
            </div>
            <div className='footer-bottom-1'>
                 <h5>Get in Touch</h5>
                 <div>
                <input type='text' className='email' placeholder='Your Email' onChange={handleemail} value={email}/>
                <span>
                    <button type='submit' className='btn' onClick={fetchApi} >Subscribe</button>
                    </span>
            </div>

                 <p>Lorem impsum dolor amit</p>
            </div>




         </div>
         <div className='love'>
           <p>
           Made With ❤️ at Acciojob | Vishwadeep Konga
           </p>
         </div>
        </div>
    )
}

export default Footer