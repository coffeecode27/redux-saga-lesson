import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCart, emptyCart } from '../redux/cart/cartAction';

const Cart= () => {
const cartData = useSelector((state)=>state.cartDataReducer);
const amount = cartData.length > 0 && cartData.map((item)=> item.price).reduce((acc, item)=>{
    return acc + item
})
const dispatch = useDispatch()
console.log(amount)
  return (
    <div>
        <Link to="/">Back</Link>
        <h1>Detail Order</h1>
        <div className='cart-page-container'>
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Action</th>
                </tr>
                {
                    cartData.map((item)=>
                     <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.color}</td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                        <td>{item.brand}</td>
                        <td><button onClick={() => dispatch(deleteCart(item.id))}> Delete Cart </button></td>
                    </tr>)
                }
         <div className='empty-cart'>
              <button onClick={() => dispatch(emptyCart())}> Empty Cart </button>
         </div>
            </table>
            <div className='price-detail'>
                <div className='adjust-price'><span>Amount :</span><span>Rp.{amount ? amount : '000'}</span></div>
                <div className='adjust-price'><span>Discount :</span><span>Rp.{amount ? amount/10 : '000'}</span></div>
                <div className='adjust-price'><span>Total Price :</span><span>Rp.{amount ? amount-(amount/10) : '000'}</span></div>
            </div>
        </div>
    </div>
  )
}

export default Cart