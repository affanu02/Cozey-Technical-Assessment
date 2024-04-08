import React, { useState, useEffect } from "react";
import "./App.css";
import ordersData from "./orders.json";
import boxesData from "./boxes.json";

function App() {
  //state to hold counts of products for picking team
  const [productCounts, setProductCounts] = useState({});

  //upon loading, update the info for picking team
  useEffect(() => {
    updatePickingInfo();
  }, []);

  //fucntion to count each product for picking team
  const updatePickingInfo = () => {
    const counts = {};

    //initialize the counts for each product type
    Object.keys(boxesData).forEach((boxType) => {
      boxesData[boxType].forEach((product) => {
        counts[product["Product Name"]] = 0;
      });
    });

    //traverse ordersData, count each product name type within Line Items for each order
    ordersData.forEach((order) => {
      order["Line Items"].forEach((lineItem) => {
        const products = boxesData[lineItem["Product Name"]] || [];
        products.forEach((product) => {
          counts[product["Product Name"]] += 1; // add tally for each product box
        });
      });
    });

    //update state with final counts
    setProductCounts(counts);
  };

  //function to get all products from the boxname
  const getProductsForBox = (boxName) => {
    return boxesData[boxName] || [];
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Giftboxes Management Tool</h1>
      </header>

      <h2>Picking Team List:</h2>
      <ul>
        {Object.entries(productCounts).map(([productName, count]) => (
          <li key={productName}>{`${productName} x ${count}`}</li>
        ))}
      </ul>

      <h2>Packing Team List:</h2>
      <div className="packing-section">
        {ordersData.map((order) => (
          <div key={order["Order ID"]} className="order">
            <h2>Order #{order["Order ID"]}</h2>
            <ul>
              <li>Order Date: {order["Order Date"]}</li>
              <li>Ships to:</li>
              <ul>
                <li>{order["Customer Name"]}</li>
                <li>{order["Shipping Address"]}</li>
              </ul>
              <li>
                <h3>Line Items</h3>
                <div className="line-items">
                  {order["Line Items"].map((item) => (
                    <div key={item["Line Item ID"]} className="line-item">
                      <ul>
                        <li>
                          <h4>{item["Product Name"]}</h4>
                        </li>
                        <ul>
                          {getProductsForBox(item["Product Name"]).map(
                            (product) => (
                              <li key={product["Product Name"]}>
                                {product["Product Name"]}
                              </li>
                            )
                          )}
                        </ul>
                      </ul>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
