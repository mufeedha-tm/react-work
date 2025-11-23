import React, { useState, useEffect } from "react";


//--------NESTED ROUTING IMPORTS ---------
// import { Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";
// import Navbar from "./Nestedrouting/Navbar";
// import Home from "./Nestedrouting/pages/Home";
// import About from "./Nestedrouting/pages/About";
// import Shop from "./Nestedrouting/pages/Shop";
// import Clothing from "./Nestedrouting/pages/shop/Clothing";
// import Accessories from "./Nestedrouting/pages/shop/Accessories";
// import HomeDecor from "./Nestedrouting/pages/shop/HomeDecor";
// import Contact from "./Nestedrouting/pages/Contact";
// import Footer from "./Nestedrouting/Footer";

// ----------REACT COMPONENTS IMPORTS------------ 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Deals from "./components/Deals";
import Products from "./components/Products";
import Services from "./components/Services";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Categories from "./components/categories";


export default function App() {
  const [dark, setDark] = useState(false);
  const [cart, setCart] = useState([]);

  //------ THEME + CART LOCAL STORAGE ---------

  useEffect(() => {
    const savedTheme = localStorage.getItem("beauty-theme");
    if (savedTheme) setDark(savedTheme === "dark");

    const savedCart = localStorage.getItem("beauty-cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("beauty-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    localStorage.setItem("beauty-cart", JSON.stringify(cart));
  }, [cart]);


  //----------- ADD / REMOVE / UPDATE CART ---------

  function addToCart(product) {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  function updateQty(id, qty) {
    if (qty < 1) return;
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty } : p))
    );
  }

  
  return (
    <>
          {/* ---------NESTED ROUTING SECTION ----------*/}
      
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />}>
          <Route index element={<Clothing />} />
          <Route path="clothing" element={<Clothing />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="home-decor" element={<HomeDecor />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />  */}

          {/* --------REACT COMPONENTS------------  */}

      
      <div className="app">
        <Navbar
          dark={dark}
          setDark={setDark}
          cartCount={cart.reduce((sum, item) => sum + item.qty, 0)}
        />

        <Cart cart={cart} remove={removeFromCart} updateQty={updateQty} />

        <main className="container">
          <Hero addToCart={addToCart} />
          <Categories />
          <Deals addToCart={addToCart} />
          <Products addToCart={addToCart} />
          <Services />
        </main>
        <Footer />
      </div>

    </>
  );
}