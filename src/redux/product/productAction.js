import {CALL_PRODUCT_LIST} from "../constant";
import {SEARCH_PRODUCT_LIST} from "../constant";

export const productList = () => {
  console.log("Action PRODUCT_LIST IS Called");
    return {
        type: CALL_PRODUCT_LIST,
    }
}

export const productSearch = (payload) => {
  console.log("Action PRODUCT_SEARCH IS Called");
    return {
        type: SEARCH_PRODUCT_LIST,
        payload
    }
}