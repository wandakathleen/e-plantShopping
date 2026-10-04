import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import CartItem from "./CartItem";

function ProductList({ onNavigateHome }) {
  const [showCart, setShowCart] = useState(false);
  const [addedNodes, setAddedNodes] = useState({});
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const totalCartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image:
            "https://images.unsplash.com/photo-1547516508-e910d368d995?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Produces oxygen at night and removes toxins such as formaldehyde.",
          cost: "$15",
        },
        {
          name: "Spider Plant",
          image:
            "https://images.unsplash.com/photo-1608161779298-f42256d2c58d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Resilient and filters carbon monoxide and xylene effectively.",
          cost: "$12",
        },
        {
          name: "Peace Lily",
          image:
            "https://images.unsplash.com/photo-1616694547693-b0f829a6cf30?q=80&w=1190&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Elegant white blooms that break down harmful benzene gases.",
          cost: "$18",
        },
        {
          name: "Boston Fern",
          image:
            "https://images.unsplash.com/photo-1497877164981-9c2afdf31e9e?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Adds lush humidity while purifying indoor contaminants.",
          cost: "$14",
        },
        {
          name: "Rubber Plant",
          image:
            "https://images.unsplash.com/photo-1477554193778-9562c28588c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Broad shiny leaves that eliminate indoor air pollutants.",
          cost: "$20",
        },
        {
          name: "Aloe Vera",
          image:
            "https://images.unsplash.com/photo-1632380211596-b96123618ca8?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Monitors air quality while offering skin-healing gel.",
          cost: "$10",
        },
      ],
    },
    {
      category: "Aromatic Plants",
      plants: [
        {
          name: "Lavender",
          image:
            "https://images.unsplash.com/photo-1785955738157-f613e67bb960?q=80&w=718&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Known for its calming aroma that encourages restorative sleep.",
          cost: "$16",
        },
        {
          name: "Jasmine",
          image:
            "https://images.unsplash.com/photo-1638890737139-8597ad1c9b84?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Delicate floral scent that relieves tension and elevates mood.",
          cost: "$19",
        },
        {
          name: "Rosemary",
          image:
            "https://plus.unsplash.com/premium_photo-1661697466676-200ffe1cbf1e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Invigorating needle-like foliage that sharpens mental clarity.",
          cost: "$11",
        },
        {
          name: "Mint",
          image:
            "https://images.unsplash.com/photo-1588908933351-eeb8cd4c4521?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Crisp refreshing fragrance great for repelling insects and culinary use.",
          cost: "$8",
        },
        {
          name: "Eucalyptus",
          image:
            "https://images.unsplash.com/photo-1611255550543-b5ecb01dfddc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Distinctive medicinal cooling scent that clears nasal airways.",
          cost: "$22",
        },
        {
          name: "Lemon Balm",
          image:
            "https://images.unsplash.com/photo-1622576454275-729fbf6aa6eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Zesty citrus aroma known to reduce stress and boost serenity.",
          cost: "$13",
        },
      ],
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          name: "Chamomile",
          image:
            "https://images.unsplash.com/photo-1624041755997-393bd6b31f05?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Daisy-like flowers brewed to soothe inflammation and ease digestion.",
          cost: "$14",
        },
        {
          name: "Peppermint",
          image:
            "https://images.unsplash.com/photo-1583896032413-005a00448e45?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Potent menthol properties to remedy headaches and nausea.",
          cost: "$9",
        },
        {
          name: "Echinacea",
          image:
            "https://images.unsplash.com/photo-1612120899319-dd0e3edfcf32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Coneflower revered for natural immune system reinforcement.",
          cost: "$21",
        },
        {
          name: "Holy Basil (Tulsi)",
          image:
            "https://images.unsplash.com/photo-1669131080043-f69be198e64f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Ayurvedic adaptogen supporting balanced stress resilience.",
          cost: "$15",
        },
        {
          name: "Thyme",
          image:
            "https://images.unsplash.com/photo-1606072104299-cdaab62c0a07?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Contains thymol, an effective antibacterial compound.",
          cost: "$10",
        },
        {
          name: "Calendula",
          image:
            "https://images.unsplash.com/photo-1656699331057-84a49e83d7ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Vibrant marigold petals traditionally used for wound healing.",
          cost: "$13",
        },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedNodes((prev) => ({ ...prev, [plant.name]: true }));
  };

  const isPlantAdded = (plantName) => {
    return (
      addedNodes[plantName] || cartItems.some((item) => item.name === plantName)
    );
  };

  return (
    <div className="product-page-root">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div
          className="nav-brand"
          onClick={() => onNavigateHome && onNavigateHome()}
        >
          <span className="brand-leaf-icon">🌿</span>
          <div>
            <h2 className="brand-heading">Paradise Nursery</h2>
            <span className="brand-subtext">Upgrade Your Space</span>
          </div>
        </div>

        <div className="nav-links">
          <button
            className="nav-link-btn"
            onClick={() => onNavigateHome && onNavigateHome()}
          >
            Home
          </button>
          <button
            className="nav-link-btn active"
            onClick={() => setShowCart(false)}
          >
            Plants
          </button>
          <div
            className="cart-icon-container"
            onClick={() => setShowCart(true)}
            title="View Shopping Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="cart-badge">{totalCartCount}</span>
          </div>
        </div>
      </nav>

      {!showCart ? (
        <main className="catalog-container max-w-4xl mx-auto px-6 py-12 text-center bg-transparent">
          <div className="catalog-header border-none shadow-none p-0 m-0">
            <h1 className="catalog-title text-4xl font-light tracking-wide text-stone-800 mb-3 font-serif">
              Botanical Catalog
            </h1>
            <p className="catalog-subtitle text-lg italic text-stone-500 max-w-xl mx-auto leading-relaxed">
              Sustainably cultivated houseplants to purify, invigorate, and heal
              your indoor living spaces.
            </p>
          </div>

          {plantsArray.map((categoryGroup, idx) => (
            <section key={idx} className="category-block">
              <div className="category-header-wrap">
                <h2 className="category-title">{categoryGroup.category}</h2>
                <span className="category-count">6 varieties</span>
              </div>

              <div className="plant-grid">
                {categoryGroup.plants.map((plant, pIdx) => {
                  const added = isPlantAdded(plant.name);
                  return (
                    <article key={pIdx} className="plant-card">
                      <div className="plant-card-media">
                        <img
                          src={plant.image}
                          alt={plant.name}
                          className="plant-card-img"
                          loading="lazy"
                        />
                        <span className="plant-price-pill">{plant.cost}</span>
                      </div>

                      <div className="plant-card-body">
                        <div>
                          <h3 className="plant-name">{plant.name}</h3>
                          <p className="plant-description">
                            {plant.description}
                          </p>
                        </div>

                        <button
                          disabled={added}
                          onClick={() => handleAddToCart(plant)}
                          className={
                            added
                              ? "btn-add-cart disabled"
                              : "btn-add-cart active"
                          }
                        >
                          {added ? "Added to Cart" : "Add to Cart"}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;
