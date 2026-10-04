import React, { useState } from "react";
import ProductList from "./ProductList";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleNavigateHome = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-root">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1 className="landing-title">Paradise Nursery</h1>
            <p className="landing-tagline">Where Green Meets Serenity</p>
            <AboutUs />
            <div style={{ marginTop: "28px" }}>
              <button
                className="get-started-btn"
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ProductList onNavigateHome={handleNavigateHome} />
      )}
    </div>
  );
}

export default App;
