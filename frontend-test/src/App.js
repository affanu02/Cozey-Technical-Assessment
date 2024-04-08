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
          <div className="product">
            <img
              className="product-img"
              src="./assets/tinywow_7_28381247.webp"
              alt="Coffee Table"
            />
            <div className="button-container">
              <button className="material-button">
                Eclipse <div className="black-wood"></div>
              </button>
            </div>
            <div className="product-name">Solis Adjustable Table</div>
            <div className="price">
              $180 or financing |{" "}
              <a href="/customize" className="customize">
                Customize{" "}
              </a>
            </div>
          </div>
          <div className="product">
            <img
              className="product-img"
              src="./assets/tinywow_8_28381358.webp"
              alt="Coffee Table"
            />
            <div className="button-container">
              <button className="material-button">
                Twilight <div className="walnut"></div>
              </button>
            </div>
            <div className="product-name">Solis Adjustable Table</div>
            <div className="price">
              $180 or financing |{" "}
              <a href="/customize" className="customize">
                Customize{" "}
              </a>
            </div>
          </div>
          <div className="product">
            <img
              className="product-img"
              src="./assets/tinywow_9_28381369.webp"
              alt="Coffee Table"
            />
            <div className="button-container">
              <button className="material-button">
                Solstice <div className="walnut"></div>
              </button>
            </div>
            <div className="product-name">Solis Adjustable Table</div>
            <div className="price">
              $180 or financing |{" "}
              <a href="/customize" className="customize">
                Customize{" "}
              </a>
            </div>
          </div>
          <div className="product">
            <img
              className="product-img"
              src="./assets/STELLA LIFT-TOP 1 CLOSED CONFIG 1 (1).webp"
              alt="Coffee Table"
            />
            <div className="button-container">
              <button className="material-button">
                Walnut <div className="walnut"></div>
              </button>
            </div>
            <div className="product-name">Stella Coffee Table - 1 Unit</div>
            <div className="price">
              $210 or financing |{" "}
              <a href="/customize" className="customize">
                Customize{" "}
              </a>
            </div>
          </div>
          <div className="product">
            <img
              className="product-img"
              src="./assets/tinywow_1_28381075.webp"
              alt="Coffee Table"
            />
            <div className="button-container">
              <button className="material-button">
                Oak <div className="oak"></div>
              </button>
            </div>
            <div className="product-name">Stella Coffee Table - 1 Unit</div>
            <div className="price">
              $210 or financing |{" "}
              <a href="/customize" className="customize">
                Customize{" "}
              </a>
            </div>
          </div>
          <div className="product">
            <img
              className="product-img"
              src="./assets/tinywow_10_28381395.webp"
              alt="Coffee Table"
            />
            <div className="button-container">
              <button className="material-button">
                Expresso <div className="expresso"></div>
              </button>
            </div>
            <div className="product-name">Pluto Side Table</div>
            <div className="price">
              $85 or financing |{" "}
              <a href="/customize" className="customize">
                Customize{" "}
              </a>
            </div>
          </div>
          <div className="product">
            <img
              className="product-img"
              src="./assets/tinywow_11_28381418.webp"
              alt="Coffee Table"
            />
            <div className="button-container">
              <button className="material-button">
                Black Wood <div className="black-wood"></div>
              </button>
            </div>
            <div className="product-name">Pluto Side Table</div>
            <div className="price">
              $85 or financing |{" "}
              <a href="/customize" className="customize">
                Customize{" "}
              </a>
            </div>
          </div>
          <div className="product">
            <img
              className="product-img"
              src="./assets/STELLA TV 1 HOLE.webp"
              alt="Coffee Table"
            />
            <div className="button-container">
              <button className="material-button">
                Walnut <div className="walnut"></div>
              </button>
            </div>
            <div className="product-name">
              Stella Media Unit - 1 Unit | No Door
            </div>
            <div className="price">
              $145 or financing |{" "}
              <a href="/customize" className="customize">
                Customize{" "}
              </a>
            </div>
          </div>
          <div className="product">
            <img
              className="product-img"
              src="./assets/no-door-media.webp"
              alt="Coffee Table"
            />
            <div className="button-container">
              <button className="material-button">
                Oak <div className="oak"></div>
              </button>
            </div>
            <div className="product-name">
              Stella Media Unit - 1 Unit | No Door
            </div>
            <div className="price">
              $145 or financing |{" "}
              <a href="/customize" className="customize">
                Customize{" "}
              </a>
            </div>
          </div>
          <div className="product">
            <img
              className="product-img"
              src="./assets/STELLA TV 1 DOOR.webp"
              alt="Coffee Table"
            />
            <div className="button-container">
              <button className="material-button">
                Walnut <div className="walnut"></div>
              </button>
            </div>
            <div className="product-name">
              Stella Media Unit - 1 Unit | With Door
            </div>
            <div className="price">
              $165 or financing |{" "}
              <a href="/customize" className="customize">
                Customize{" "}
              </a>
            </div>
          </div>
          <div className="product">
            <img
              className="product-img"
              src="./assets/stella-media-01.webp"
              alt="Coffee Table"
            />
            <div className="button-container">
              <button className="material-button">
                Oak <div className="oak"></div>
              </button>
            </div>
            <div className="product-name">Stella Media Unit</div>
            <div className="price">
              $165 or financing |{" "}
              <a href="/customize" className="customize">
                Customize{" "}
              </a>
            </div>
          </div>
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
