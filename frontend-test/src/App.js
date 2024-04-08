import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="section">
        <h1>Coffee Tables</h1>
        <div className="section-products">
          <div className="product">
            <img src="./assets/coffee-table.webp" alt="Coffee Table" />
            <div className="button-container">
              <button className="material-button">
                Walnut <div className="walnut"></div>
              </button>
            </div>
            <div className="product-name">Mensa Coffee Table</div>
            <div className="price">
              $360 or financing |{" "}
              <a href="/customize" className="customize">
                Customize{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
