import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "api/pokemon",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://pokeapi.co/api/v2`,
  }),
  endpoints(builder) {
    return {
      fetchListPokemon: builder.query({
        query() {
          return `/pokemon?limit=10`;
        },
      }),

      fetchDetailPokemon: builder.query({
        query(pokemonId) {
          return `/pokemon/${pokemonId}`;
        },
      }),
    };
  },
});

export const { useFetchListPokemonQuery, useFetchDetailPokemonQuery } =
  pokemonApi;
