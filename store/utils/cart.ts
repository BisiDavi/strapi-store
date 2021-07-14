import * as ga from '@lib/ga';

export const CartCounter = (count, operator) => {
    switch (operator) {
        case 'increase': {
            const increaseCount = count + 1;
            return increaseCount;
        }
        case 'decrease': {
            const decreaseCount = count > 0 && count - 1;
            return decreaseCount;
        }
    }
};

export const ProductAmount = (payload, count) => {
    const amount = count * payload.products[payload.index].price;
    return amount;
};

export const deleteProduct = (state, payload) => {
    console.log('payload deleteProduct', payload);
    ga.event({
        action: 'remove_from_cart',
        params: {},
    });
    state.products.splice(payload.index, 1);
};
