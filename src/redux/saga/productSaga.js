import {takeEvery, put} from 'redux-saga/effects'
import { CALL_PRODUCT_LIST } from '../constant';
import { SEARCH_PRODUCT_LIST } from '../constant';
import { SET_PRODUCT_LIST } from '../constant';

// ketika action PRODUCT_LIST (yang prosesnya berupa call API) dipanggil, maka sebelum sampai ke reducer,
// akan otomatis di handle oleh saga
function* getProductSaga(){
    const dataFromApi = yield fetch('http://localhost:3001/products');
    const dataForPayload = yield dataFromApi.json()
    console.log("Get Product Saga Is Called", dataForPayload);
    // dari saga, kita akan mengirim data hasil dari proses API-nya kedalam reducer
    // dengan cara mengirimkan action-type dan data(payload) ke reducer-nya,
    // flownya mirip saat kita mengirim actiontype dan payload langsung dari action(sebelum menggunakan saga)
    yield put ({type:SET_PRODUCT_LIST, payload:dataForPayload})
}

function* searchProductSaga(dataRequest){
    const dataFromApi = yield fetch(`http://localhost:3001/products?q=${dataRequest.payload}`);
    const dataForPayload = yield dataFromApi.json()
    console.log("Search Product Saga Is Called", dataForPayload);
    yield put ({type:SET_PRODUCT_LIST, payload:dataForPayload})
}

// function productSaga adalah "pemantau" untuk action dengan type CALL_PRODUCT_LIST dan SEARCH_PRODUCT_LIST
// ketika action dengan type tersebut dipicu, maka akan menjalankan fungsi getProductSaga & searchProductSaga
function* productSaga (){
    yield takeEvery(CALL_PRODUCT_LIST, getProductSaga)
    yield takeEvery(SEARCH_PRODUCT_LIST, searchProductSaga)
}

export default productSaga