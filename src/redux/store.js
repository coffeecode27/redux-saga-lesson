/**
 * Store berfungsi untuk mengambil semua data dari reducer, untuk kemudian 
 * dapat digunakan di seluruh file react.js kita
 * const store = legacy_createStore({rootReducer}); // mengubungkan store dengan rootreducer(allreducers)
 */
import {legacy_createStore} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import productSaga from './saga/productSaga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const store  = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware] // register middleware saga
    
});
// jalankan midleware saga dengan mengirimkan argumen berupa file yg berisi logic saga yg akan diproses
sagaMiddleware.run(productSaga)
export default store;

