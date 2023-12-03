import {
    FETCH_SUPPLIERS_REQUEST,
    FETCH_SUPPLIERS_FAILURE,
    FETCH_SUPPLIERS_SUCCESS,
  } from "../../constants/actions-types";
  import SupplierService from "../../services/SupplierService";
  
  export const fetchSuppliers = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_SUPPLIERS_REQUEST });
      try {
        const response = await SupplierService.getAll(); // Add 'await' here
        dispatch({
          type: FETCH_SUPPLIERS_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: FETCH_SUPPLIERS_FAILURE,
          payload: error.message,
        });
      }
    };
  };
  