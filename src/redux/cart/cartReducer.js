/* eslint-disable no-case-declarations */
import { ADD_TO_CART, REMOVE_FROM_CART } from './cartActionType';

const initialState = [];

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const isAvilableInCart = state.find((pd) => pd.id === action.payload.id);
            if (isAvilableInCart) {
                return state.map((product) => {
                    if (product.id === isAvilableInCart.id) {
                        return {
                            ...isAvilableInCart,
                            quantity: isAvilableInCart.quantity + 1,
                        };
                    }
                    return product;
                });
            }
            return [...state, { ...action.payload, quantity: 1 }];

        case REMOVE_FROM_CART:
            const isAvilable = state.find((pd) => pd.id === action.payload.id);
            if (isAvilable.quantity > 1) {
                return state.map((product) => {
                    if (product.id === isAvilable.id) {
                        return {
                            ...isAvilable,
                            quantity: isAvilable.quantity - 1,
                        };
                    }
                    return product;
                });
            }
            return state.filter((product) => product.id !== action.payload.id);

        default:
            return state;
    }
};

export default cartReducer;
