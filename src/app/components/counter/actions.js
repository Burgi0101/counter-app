/* ACTIONS THAT CAN BE DISPATCHED BY THE COUNTER COMPONENT */

import { INCREMENT, DECREMENT } from './actionTypes';

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT,
    }
}