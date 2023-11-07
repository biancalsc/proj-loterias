import { BrowserRouter, Route, Routes } from "react-router-dom";
import Megasena from "../pages/Megasena";
import Lotofacil from "../pages/Lotofacil";
import Quina from "../pages/Quina";
import Menu from "../components/Menu";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/mega" element={<Megasena />} />
        <Route path="/lotofacil" element={<Lotofacil />} />
        <Route path="/quina" element={<Quina />} />
      </Routes>
    </BrowserRouter>
  );
}
