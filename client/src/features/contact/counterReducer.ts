import { createSlice } from "@reduxjs/toolkit"

export type CounterState = {
    data: number
}


const initialState: CounterState = {
    data: 42
}


export const counter = createSlice({

    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.data += action.payload ?? 1;
        },
        decrement: (state, action) => {
            state.data -= action.payload ?? 1;
        }
    }

})

export const { increment, decrement } = counter.actions;

export function incrementLegacy(amount = 1) {
    return {
        type: 'INCREMENT',
        payload: amount,
    }
}
export function decrementLegacy(amount = 1) {
    return {
        type: 'DECREMENT',
        payload: amount,
    }
}



export default function counterReducer(state = initialState, action: { type: string, payload: number }) {

    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                data: state.data + action.payload
            }

        case 'DECREMENT':
            return {
                ...state,
                data: state.data - action.payload
            }

        default:
            return state;
    }

}