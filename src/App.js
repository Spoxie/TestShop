import "./App.css";

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Basket from "./components/basket";
import Delivery from "./components/delivery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./components/header";
import Products from "./components/productsFront";
import Search from "./components/search";
import productsService from "./services/products";

function App() {
  const [basket, setBasket] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [basketView, setBasketView] = useState(false);
  var [total, setTotal] = useState(0);

  //Searching all the products with a service.
  useEffect(() => {
    productsService.getAll().then((data) => {
      setProducts(data.products);
      console.log(products);
    });
  }, []);
  //Search Function, emptying the last search and getting the needed products
  const search = (e) => {
    e.preventDefault();
    setProducts([]);
    productsService.searchProduct(searchItem).then((data) => {
      setProducts(data.products);
    });
  };
  //Making a basket, and adding the total price.
  const basketfunction = (item) => {
    var tempTotal = total++ + item.price;
    setTotal(tempTotal);
    console.log(tempTotal);
    console.log(basket);
    setBasket((basketItems) => [...basketItems, item]);
    //it's async(?) so it updates it oddly to the total. Total in header updates fine, but everything else seems off
  };

  return (
    <div className="p-2">
      <Header
        total={total}
        updateBasketView={setBasketView}
        basketView={basketView}
      />

      <h1>Search</h1>
      <Search
        Basket={Basket}
        basketView={basketView}
        basket={basket}
        search={search}
        searchItem={searchItem}
        setSearchItem={setSearchItem}
      />
      <Basket
        basketView={basketView}
        basketItems={basket}
        total={total}
        setTotal={setTotal}
        setBasketItems={setBasket}
        setBasketView={setBasketView}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Products
              product={products}
              basket={basketfunction}
              isBasketView={basketView}
            />
          }
        />
        <Route
          path="/delivery"
          element={<Delivery total={total} basket={basket} />}
        />
      </Routes>
    </div>
  );
}

export default App;
