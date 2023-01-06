import { useEffect, useState } from "react";
import Header from "./components/header";
import PopularProducts from "./components/popularProducts";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({
    items: [],
    totalQuantity: 0,
    totalPrice: 0
  });

  const fetchData = async () => {
    const resp = await axios.get("http://localhost:8000/products/all");
    setProducts(resp.data);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <Header cart={cart} />
      <PopularProducts products={products} cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
