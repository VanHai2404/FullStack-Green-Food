import {
    FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCT_DETAIL_FAILURE, FETCH_PRODUCT_DETAIL_SUCCESS, FETCH_PRODUCT_DETAIL_REQUEST
} from "../constants/actions-types";

import ProductService from "../../services/ProductService";

export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_PRODUCTS_REQUEST });

        try {
            const response = await ProductService.getAll();
            dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: FETCH_PRODUCTS_FAILURE,
                payload: error.message
            });
        }
    };
};

export const fetchProductDetail =(productId)=>{
    return async(dispatch)=>{
     dispatch({type: FETCH_PRODUCT_DETAIL_REQUEST});
     try {
       const response = await ProductService.get(productId);
       console.log('DATA ACTION PRODUCT : ',response.data)
       dispatch({
         type:FETCH_PRODUCT_DETAIL_SUCCESS,
         payload:response.data

       });
     } catch (error) {
       dispatch({
         type:FETCH_PRODUCT_DETAIL_FAILURE,
         payload: error.message
       });

       
     }
    }
}