import React from "react";
import { useState, useEffect } from "react";

export default function ProductList(props) {
  const [product, setProduct] = useState([]);
  const { productSearch } = props;

  const fetchData = async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const result = await resp.json();
    const name = result.products.filter(
      (el) =>
        String(el.title).toLowerCase().includes(productSearch.toLowerCase()) ||
        String(el.category).toLowerCase().includes(productSearch.toLowerCase())
    );
    setProduct(name);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
    return () => {
      clearTimeout();
    };
  }, [productSearch]);

  return (
    <div>
      <ul>
        {product.map((el, index) => (
          <li key={index}>
            {el.title} | {el.category} | ${el.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
