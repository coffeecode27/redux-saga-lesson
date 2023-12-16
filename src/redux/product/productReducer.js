import { SET_PRODUCT_LIST } from "../constant";

export const productReducer = (state=[], action) => {
    switch(action.type){
        case SET_PRODUCT_LIST : // receive action from saga
            console.log("Reducer product list is Called", action);
            return [...action.payload];
        default:
            return state
    }
}
