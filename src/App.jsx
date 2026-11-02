import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import About from "./pages/About";
import Artura from "./pages/Artura";
import BayesianHealth from "./pages/BayesianHealth";
import Finiverse from "./pages/Finiverse";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="artura" element={<Artura />} />
          <Route path="finiverse" element={<Finiverse />} />
          <Route path="bayesian-health" element={<BayesianHealth />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
