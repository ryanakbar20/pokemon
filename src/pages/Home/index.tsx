import { useFetchListPokemonQuery } from "../../config/features";
import { Card } from "../../components";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const { data = {} } = useFetchListPokemonQuery({});

  return (
    <div className="bg-gray-100">
      <div className="bg-white max-w-screen-md mx-auto p-4">
        <div className="flex flex-row justify-between">
          <h1 className="text-red-500 font-bold text-2xl md:text-3xl">
            Pokémon
          </h1>
          <button className="px-4 py-2 text-white bg-red-500 rounded-md font-medium hover:bg-red-600" onClick={() => navigate("/my-pokemon")}>
            My Pokémon
          </button>
        </div>
        <div className="flex flex-col space-y-4 mt-8">
          {data?.results?.map((item: any, index: number) => {
            return (
              <Card
                key={index}
                name={item?.name}
                imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                  item?.url?.split("/")[6]
                }.svg`}
                onClick={() =>
                  navigate(`/pokemon/${item?.url?.split("/")[6]}`, {
                    state: { name: item?.name },
                  })
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
