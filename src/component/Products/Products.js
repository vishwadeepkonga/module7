import React from "react";
import "./Products.css";
import Card from "./Card";

function Product() {
  const [data, setData] = React.useState({});

  let Data = [];

  React.useEffect(() => {
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    )
      .then((res) => res.json())
      .then((res) => {
        for (const item in res) {
          Data.push(res[item]);
        }
        setData(Data);
      });
      }, []);

  let Cards = "";

  if (data.length > 0) {
    Cards = data.map((item) => (
      <Card
        id={item.id}
        key = {item.id}
        name={item["productName"]}
        img={item["productImage"]}
        oldPrice={item["oldPrice"]}
        newPrice={item["newPrice"]}
      />
    ));
  }

  return (
    <div className="products-container">
      <h3>Products</h3>
      <div className="cards">{Cards}</div>
    </div>
  );
}

export default Product;
