/**
 * Action => berfungsi sebagai trigger yg akan mengirim type dan payload(data-perubahan) kedalam reducer
 * reducer yang akan dijalankan sesuai dengan type yg dikirim oleh action.
 * Perlu diingat bahwa saat mendispatch action, type wajib dikirim juga, jika tidak maka akan error
 */
import { ADD_TO_CART } from "../constant";
import { DELETE_CART } from "../constant";
import {EMPTY_CART} from "../constant";


export const addTocart = (payload) => {
    console.log("action is called", payload);
    return {
        type: ADD_TO_CART,
        payload
    }
}
export const deleteCart = (payload) => {
    console.log("action delete cart is called", payload);
    return {
        type: DELETE_CART,
        payload
    }
}
export const emptyCart = () => {
    console.log("action empty cart is called");
    return {
        type: EMPTY_CART,
    }
}
