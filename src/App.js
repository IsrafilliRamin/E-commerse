import Navbar from "./components/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Home from "./components/Home";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom"
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>




    </>
  );
}

export default App;
