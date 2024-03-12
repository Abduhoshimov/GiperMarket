import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likeItems: []
}

const likeReducer = createSlice({
    name: "like",
    initialState,
    reducers: {
        addLike: (state, action) => {
            const findId = state.likeItems.find((item) => item.id === action.payload.id)
            if (!findId) {
                return { ...state, likeItems: [...state.likeItems, action.payload] }
            }
        },
        deleteLike: (state, action) => {
            return { ...state, likeItems: state.likeItems.filter((obj) => obj.id !== action.payload.id) }
        }
    },
})


export default likeReducer.reducer

export const { addLike, deleteLike } = likeReducer.actions