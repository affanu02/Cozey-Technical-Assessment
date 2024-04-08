import "./App.css";
import productsData from "./products.json";

function App() {
  return (
    <div className="App">
      <div className="section">
        <h1>Coffee Tables</h1>
        <div className="section-products">
          {productsData["Coffee Tables"].map((product) => (
            <div className="product">
              <img
                className="product-img"
                src={product.src}
                alt={product.product_name}
              />
              <div className="button-container">
                <button className="material-button">
                  {product.material_button_type}{" "}
                  <div className={product.material_button_call}></div>
                </button>
              </div>
              <div className="product-name">{product.product_name}</div>
              <div className="price">
                {product.price_text}{" "}
                <a href="/customize" className="customize">
                  Customize{" "}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <h1>Side Tables</h1>
        <div className="section-products">
          {productsData["Side Tables"].map((product) => (
            <div className="product">
              <img
                className="product-img"
                src={product.src}
                alt={product.product_name}
              />
              <div className="button-container">
                <button className="material-button">
                  {product.material_button_type}{" "}
                  <div className={product.material_button_call}></div>
                </button>
              </div>
              <div className="product-name">{product.product_name}</div>
              <div className="price">
                {product.price_text}{" "}
                <a href="/customize" className="customize">
                  Customize{" "}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <h1>Media Units</h1>
        <div className="section-products">
          {productsData["Media Units"].map((product) => (
            <div className="product">
              <img
                className="product-img"
                src={product.src}
                alt={product.product_name}
              />
              <div className="button-container">
                <button className="material-button">
                  {product.material_button_type}{" "}
                  <div className={product.material_button_call}></div>
                </button>
              </div>
              <div className="product-name">{product.product_name}</div>
              <div className="price">
                {product.price_text}{" "}
                <a href="/customize" className="customize">
                  Customize{" "}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <h1>Table Sets</h1>
        <div className="section-products">
          {productsData["Table Sets"].map((product) => (
            <div className="product">
              <img
                className="product-img"
                src={product.src}
                alt={product.product_name}
              />
              <div className="button-container">
                <button className="material-button">
                  {product.material_button_type}{" "}
                  <div className={product.material_button_call}></div>
                </button>
              </div>
              <div className="product-name">{product.product_name}</div>
              <div className="price">
                {product.price_text}{" "}
                <a href="/customize" className="customize">
                  Customize{" "}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
