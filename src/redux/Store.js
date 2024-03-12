import { configureStore } from "@reduxjs/toolkit"
import counter from "./reducer/counter"
import todo from "./reducer/todo"
import like from "./reducer/like"
import { saveState } from "../lib/storage"

export const store = configureStore({
    reducer: {
        counter,
        todo,
        like
    }
})

store.subscribe(() => {
    saveState("shoppingCards", store.getState());
  });