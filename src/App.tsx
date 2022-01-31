import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Detail } from "./pages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/pokemon/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}
