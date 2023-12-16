import { useEffect } from 'react';
import { addTocart } from '../redux/cart/cartAction';
import { productList } from '../redux/product/productAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'

function Main() {
  const result = useSelector((state)=>state.productReducer) // akses state product dari store

  // useDispatch akan mengirim action kedalam store, lalu menjalankan reducer(yg sesuai dengan type-nya)
  // singkatnya, action akan dimasukkan kedalam parameter pada bagian reducer(yg terhubung dengan store)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(productList()) // action yg di dispatch akan di handle oleh saga terlebih dahulu
  },[])

  console.log("Data product ", result);
  return (
    <div>
      <div className='product-container'>
            {
              result.map((item) =>
               <div className='product-item' key={item.id}>
                  <img src={item.photo} alt={item.name}/>
                  <div>Name : {item.name}</div>
                  <div>Color : {item.color}</div>
                  <div>Price : RP {item.price}</div>
                  <div>Category : {item.category}</div>
                  <div>Brand : {item.brand}</div>
                  <div>
                  <button onClick={() => dispatch(addTocart(item))}> Add To Cart </button>
                  </div>
              </div>)
            }
      </div>
    </div>
  );
}

export default Main;
