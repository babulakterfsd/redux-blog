/* eslint-disable no-alert */
/* eslint-disable consistent-return */
const myLogger = (store) => (next) => (action) => {
    const { products } = store.getState();
    if (action.type === 'ADD_TO_CART') {
        const product = products.find((pd) => pd.id === action.payload.id);
        if (product.stock === 0) {
            return alert('Out of stock');
        }
    }
    next(action);
};
export default myLogger;
