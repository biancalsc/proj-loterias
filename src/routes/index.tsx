import { BrowserRouter, Route, Routes } from "react-router-dom";
import Megasena from "../pages/megasena";
import Timemania from "../pages/timemania";
import Quina from "../pages/quina";
import { ThemeProvider } from "styled-components";
import { useLoteria } from "../hooks";
import { Menu } from "../components";

export default function Rotas() {
  const { tema } = useLoteria();
  return (
    <ThemeProvider theme={tema}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/megasena" element={<Megasena />}></Route>
          <Route path="/timemania" element={<Timemania />}></Route>
          <Route path="/quina" element={<Quina />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
