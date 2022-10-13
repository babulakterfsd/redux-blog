import { ADD_TO_CART, REMOVE_FROM_CART } from './cartActionType';

export const addtoCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeFromCart = (product) => ({
    type: REMOVE_FROM_CART,
    payload: product,
});
