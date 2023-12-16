/**
 * Root Reducer(atau bisa apapun namanya) => berfungsi untuk membungkus semua reducer yg ada.
 * jadi, mungkin saja kita memiliki lebih dari satu reducer, maka kita bisa membungkusnya
 * menggunakan combineReducer untuk menjadi satu, sehingga file rootReducer inilah yg akan hubungkan
 * dengan storenya.
 */
import { combineReducers } from "redux";
import { cartDataReducer } from "./cart/cartReducer";
import { productReducer } from "./product/productReducer";

export default combineReducers({
    cartDataReducer,
    productReducer
})

