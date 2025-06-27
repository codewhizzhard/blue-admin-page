import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { blueBreedAdminApi } from "./services/bluebreedAdmin";
import authReducer from "./services/auth";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        [blueBreedAdminApi.reducerPath]: blueBreedAdminApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blueBreedAdminApi.middleware),

})
setupListeners(store.dispatch);