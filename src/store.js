import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { blueBreedAdminApi } from "./services/bluebreedAdmin";


export const store = configureStore({
    reducer: {
        [blueBreedAdminApi.reducerPath]: blueBreedAdminApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blueBreedAdminApi.middleware),

})
setupListeners(store.dispatch);