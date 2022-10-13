/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import { ADD_TO_CART, REMOVE_FROM_CART } from '../cart/cartActionType';
import GET_ALL_PRODUCTS from './productActionType';

const initialState = [
    {
        id: 1,
        title: 'Asus Vivobook x515MA',
        price: 35500,
        stock: 10,
    },
    {
        id: 2,
        title: 'DEll Inspiron 15 3000',
        price: 93000,
        stock: 7,
    },
    {
        id: 3,
        title: 'Canon EOS 1500D',
        price: 65000,
        stock: 12,
    },
];

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return state;

        case ADD_TO_CART:
            const targetProduct = state.find((pd) => pd.id === action.payload.id);
            const updatedState = state.map((product) => {
                if (product.id === targetProduct.id) {
                    return {
                        ...targetProduct,
                        stock: targetProduct.stock - 1,
                    };
                }
                return product;
            });
            return updatedState;

        case REMOVE_FROM_CART:
            const targetProduct2 = state.find((pd) => pd.id === action.payload.id);
            const updatedState2 = state.map((product) => {
                if (product.id === targetProduct2.id) {
                    return {
                        ...targetProduct2,
                        stock: targetProduct2.stock + 1,
                    };
                }
                return product;
            });
            return updatedState2;

        default:
            return state;
    }
};

export default productReducer;
