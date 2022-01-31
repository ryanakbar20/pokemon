import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi, myPokemonApi } from "../features";

export default configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [myPokemonApi.reducerPath]: myPokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(pokemonApi.middleware);
  },
});
