import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Navigator from "./components/Navigator";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
