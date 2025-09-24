import Home from "./components/Home";
import ProductsDetails from "./components/ProductsDetails";
import CardPage from "./components/CardPage";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductsDetails />} />
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
