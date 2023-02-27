import About from "@/pages/About";
import Home from "@/pages/Home";
import DetailModal from "./PostDetail/index";
import { Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} > 
        <Route path=":id" element={<DetailModal />} />
      </Route>
    </Routes>
  );
}
