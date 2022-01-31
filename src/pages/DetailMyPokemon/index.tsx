import { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import {
  useFetchDetailPokemonQuery,
  useDeletePokemonMutation,
} from "../../config/features";

export default function Home() {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const { data = {} } = useFetchDetailPokemonQuery(params?.id);

  const [deletePokemon, { isSuccess }] = useDeletePokemonMutation();

  const [imageUrl, setImageUrl] = useState(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${params?.id}.png`
  );

  useEffect(() => {
    if (isSuccess) {
      navigate("/my-pokemon");
    }
  }, [isSuccess, navigate]);

  function generateSprites(sprites: any) {
    const listSprites = [];

    listSprites[0] = sprites?.front_default;
    for (let i = 0; i < Object.keys(sprites).length; i++) {
      if (
        Object.keys(sprites)[i] !== "front_default" &&
        sprites[Object.keys(sprites)[i]] &&
        typeof sprites[Object.keys(sprites)[i]] === "string"
      ) {
        listSprites.push(sprites[Object.keys(sprites)[i]]);
      }
    }

    return listSprites;
  }

  async function handleRelease() {
    try {
      deletePokemon(params?.id);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div className="bg-gray-100">
        <div className="bg-white max-w-screen-md mx-auto p-4">
          <h1 className="text-red-500 font-bold text-2xl md:text-3xl uppercase text-center">
            {(location?.state as any)?.name}
          </h1>
          <div className="mt-8">
            <div className="bg-emerald-400 flex items-center justify-center p-4 rounded-lg">
              <img className="w-40 md:w-52" src={imageUrl} alt="character" />
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center">
              <div className="flex flex-row space-x-4 overflow-x-auto py-4">
                {data?.sprites &&
                  generateSprites(data?.sprites)?.map(
                    (item: any, index: number) => {
                      return (
                        <img
                          key={index}
                          className={`w-16 rounded-full border-4 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 duration-300 cursor-pointer ${
                            imageUrl === item
                              ? "border-red-400"
                              : "border-green-400"
                          }`}
                          src={item}
                          alt="character"
                          onClick={() => setImageUrl(item)}
                        />
                      );
                    }
                  )}
              </div>
              <button
                className="px-4 py-2 w-40 h-12 text-white bg-red-500 rounded-md font-medium hover:bg-red-600"
                onClick={handleRelease}
              >
                Release Pokémon
              </button>
            </div>
            <div>
              <h2 className="font-medium text-lg md:text-xl">Types</h2>
              <div className="grid grid-rows-1 grid-flow-col gap-4 overflow-x-auto pb-2 custom-scrollbar mt-2">
                {data?.types?.map((item: any, index: number) => {
                  return (
                    <p
                      className="p-1 text-center w-40 bg-gray-200 rounded-full"
                      key={index}
                    >
                      {item?.type?.name}
                    </p>
                  );
                })}
              </div>
            </div>
            <div>
              <h2 className="font-medium text-lg md:text-xl">Moves</h2>
              <div className="grid grid-rows-1 grid-flow-col gap-4 overflow-x-auto pb-2 custom-scrollbar mt-2">
                {data?.moves?.map((item: any, index: number) => {
                  return (
                    <p
                      className="p-1 text-center w-40 bg-gray-200 rounded-full"
                      key={index}
                    >
                      {item?.move?.name}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
