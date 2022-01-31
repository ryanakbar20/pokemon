import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Detail, MyPokemon, DetailMyPokemon } from "./pages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/pokemon/:id" element={<Detail />} />
        <Route path="/my-pokemon" element={<MyPokemon />} />
        <Route path="/my-pokemon/:id" element={<DetailMyPokemon />} />
      </Routes>
    </Router>
  );
}
