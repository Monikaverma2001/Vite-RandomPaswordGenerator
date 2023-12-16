
import { useEffect, useState } from "react"

function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProduct(json.products);
        console.log(json.products);
      });
  }, []);
  return (
    <>
      <div>Products</div>

      {product.map((e) => (
        <><div>{e.title}</div></>
      ))}
    </>
  );
}
export default Products;
