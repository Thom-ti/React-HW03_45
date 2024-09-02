import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";

export default function App() {
  const [productSearch, setProductSearch] = useState("");

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl p-4">Product Search</h1>
      <SearchBar setProductSearch={setProductSearch} />
      <ProductList productSearch={productSearch} />
    </div>
  );
}
