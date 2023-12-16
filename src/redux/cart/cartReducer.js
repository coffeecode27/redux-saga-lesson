/**
 * Reducer => berfungsi untuk menghandle data pada store, seperti simpan, mengupdate, hapus, dan lainnya.
 * dan setelah reducer selesai melakukan tugasnya, maka data yang dikembalikan akan(kembali) disimpan
 * kedalam store-nya sehingga semua file react app kita dapat mengakses data(baru) tersebut(lagi).
 *
 * Reducer akan bekerja sesuai type yang dikirim dari action, jika action mengirim type "A", maka
 * reducer "A" yg akan dijalankan, jika type "B" maka reducer "B" ug akan dijalankan
 */
import { ADD_TO_CART } from "../constant";
import { DELETE_CART } from "../constant";
import {EMPTY_CART} from "../constant";

export const cartDataReducer = (state=[], action) => {
    switch(action.type){
        case ADD_TO_CART :
            console.log("Reducer cart is Called", action);
            return [...state, action.payload];
        case DELETE_CART :
            console.log("Reducer delete cart is Called", action);
            // state.length = state.length ? state.length - 1 : [];
            const remainingState = state.filter((item) => item.id !== action.payload)
            return [...remainingState];
        case EMPTY_CART :
            console.log("Reducer empty cart is Called", action);
            state=[]
            return [...state];
        default:
            return state
    }
}



// Contoh penggunaan condition menggunakan if else
// if(action.type === ADD_TO_CART){
//     console.log("Reducer is Called");
//     return data
// } else {
//     return "Reducer is not called"
// }