import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./Services/dataSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({

    reducer: {
       [dataSlice.reducer]: dataSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dataSlice.middleware)
})

setupListeners(store.dispatch)