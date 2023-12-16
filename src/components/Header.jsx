import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { productSearch } from '../redux/product/productAction';

const Header = () => {
  const result = useSelector((state)=>state.cartDataReducer)
  const dispatch = useDispatch()


  console.log("data cart", result);
  return (
    <div className='header'>
      <Link to="/" className='logo'><h2>E-Cumshot</h2></Link>
      <div className='search-box'>
           <input type='text' onChange={(event)=>dispatch(productSearch(event.target.value))}
            placeholder='Search Product'/>
      </div>
      <Link to="/cart">
       <div className='cart-div'>
            <span>{result.length}</span>
            <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt=""/>
        </div>
      </Link>
        
    </div>
  )
}

export default Header