import React from "react";

const fetchProducts = async () => {
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
  await new Promise((resolve) => setTimeout(resolve, timeout));
  var response = await fetch(
    "https://api-development.plaza.dev/product-api/ListProducts?storeId=7a53e046-f4f5-4f78-a9a5-8c6ba51b702f&limit=30&offset=0"
  );
  var products = await response.json();

  return products.data.products;
};

const ProductList = async () => {
  const products = await fetchProducts();
  console.log(products);
  return (
    <div>
      {products.map((product: any) => {
        return <li>{product.name}</li>;
      })}
    </div>
  );
};

export default ProductList;
