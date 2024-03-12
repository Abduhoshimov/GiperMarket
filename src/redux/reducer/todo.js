import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

const todoReducer = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action) => {
            const findId = state.cartItems.find((item) => item.id === action.payload.id)
            if (!findId) {
                return { ...state, cartItems: [...state.cartItems, action.payload] }
            }
        },
        deleteItem: (state, action) => {
            return {...state, cartItems: state.cartItems.filter((obj) => obj.id !== action.payload.id)}
        },
        editItemm : (state, action) => {
            return {...state, cartItems:state.cartItems.map((item) => item.id === action.payload.id ? action.payload : item) }
        }
    },
})


export default todoReducer.reducer

export const { add, deleteItem, editItemm } = todoReducer.actions