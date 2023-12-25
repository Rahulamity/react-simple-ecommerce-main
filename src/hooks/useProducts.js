import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("./products.JSON").then((response) => setProducts(response.data));
  }, []);

  return [products];
};

export default useProducts;
