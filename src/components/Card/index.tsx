interface CardProps {
  name: string;
  imageUrl: string;
  onClick(): any;
}

export default function Card(Props: CardProps) {
  return (
    <div
      className="bg-emerald-400 rounded-md p-4 flex flex-row space-x-10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 hover:bg-emerald-500 duration-300 cursor-pointer"
      onClick={Props.onClick}
    >
      <img src={Props.imageUrl} alt="character" width={60} />
      <h1 className="font-bold text-xl md:text-2xl text-white uppercase">
        {Props.name}
      </h1>
    </div>
  );
}
