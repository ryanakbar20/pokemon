import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myPokemonApi = createApi({
  reducerPath: "api/myPokemon",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://server-pokemon.herokuapp.com/api/v1`,
  }),
  endpoints(builder) {
    return {
      fetchListMyPokemon: builder.query({
        query() {
          return `/pokemon`;
        },
      }),

      addPokemon: builder.mutation({
        query: (body) => ({
          method: "POST",
          url: "/pokemon",
          body,
        }),
      }),

      renamePokemon: builder.mutation({
        query: (body) => ({
          method: "PUT",
          url: "/pokemon",
          body,
        }),
      }),

      deletePokemon: builder.mutation({
        query: (idPokemon) => ({
          method: "DELETE",
          url: `/pokemon/${idPokemon}`,
        }),
      }),
    };
  },
});

export const {
  useFetchListMyPokemonQuery,
  useAddPokemonMutation,
  useRenamePokemonMutation,
  useDeletePokemonMutation,
} = myPokemonApi;
