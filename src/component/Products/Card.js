import React from 'react'
import star from "../../Assets/Star 4.png"; 
import "./Products.css";
import {CounterContext} from '../CounterContext'

function Card(props) {

  const {counter, setCounter} = React.useContext(CounterContext)

    const [isAdded, setIsAdded] = React.useState(false)

    function handleCart(){
        setIsAdded(!isAdded)
        manageCounter()
    }
    function manageCounter(){
      if(!isAdded){
        setCounter(counter+1)
      }else{
        setCounter(counter-1)
      }
    }


    const style = isAdded ?
    {
            padding : '10px',
            width : '90%',
            margin : '10px auto',
            borderRadius : '10px',
            backgroundColor : 'gray',
            color : 'white',
            border : '1px solid green',
            outline : 'none',
            fontWeight : '600',
            fontSize : '20px',
            lineHeight : '32px',
            letterSpacing : '0.1px',
        } : {
            padding : '10px',
            width : '90%',
            margin : '10px auto',
            borderRadius : '10px',
            backgroundColor : '#23A6F0',
            color : 'white',
            border : '1px solid #23A6F0',
            outline : 'none',
            fontWeight : '600',
            fontSize : '20px',
            lineHeight : '32px',
            letterSpacing : '0.1px',
        }

       
       


  return (
        <div className="product-card">
          <img src={props.img} alt="phone" className="product-image" />
          <p className="product-name">{props.name}</p>
          <div className="stars-prices">
            <div className="star-comp">
              <img src={star} alt="" className="star" />
              <img src={star} alt="" className="star" />
              <img src={star} alt="" className="star" />
              <img src={star} alt="" className="star" />
              <img src={star} alt="" className="star" />
            </div>
            <div>
              <span className="oldprice">
                <strike>{props.oldPrice}</strike>
              </span>
              <span className="newprice">{props.newPrice}/-</span>
            </div>
          </div>
          <button type="button" 
          className="add-button" 
          style = {style}
          onClick = {handleCart}>
            {!isAdded ? <span>ADD TO CART</span> : <span>ADDED TO CART</span>}
          </button>
        </div>
  )
}

export default Card
