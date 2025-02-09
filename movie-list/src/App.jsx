import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
