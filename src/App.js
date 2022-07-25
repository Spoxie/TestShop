import "./App.css";

import { useEffect, useRef, useState } from "react";

import Basket from "./components/basket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./components/header";
import Products from "./components/productsFront";
import productsService from "./services/products";

function App() {
  const [basket, setBasket] = useState([]);
  const ref = useRef("def");
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
    const basketTotal = basket.reduce((prev, next) => prev + next.price, 0);
    var tempTotal = total++ + basketTotal;
    setTotal(tempTotal);
    console.log(tempTotal);
    console.log(basket);
    setBasket((basketItems) => [...basketItems, item]);
    //it's async(?) so it updates it oddly to the total. Total in header updates fine, but everything else seems off
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);
  const handleClickOutside = (e) => {
    if (!ref?.current?.contains(e.target)) {
      setBasketView(false);
    }
  };

  return (
    <div className="p-2">
      <Header
        total={total}
        updateBasketView={setBasketView}
        basketView={basketView}
      />

      <div>
        <div ref={ref}>
          <Basket basketView={basketView} basketItems={basket} />
        </div>

        <form onSubmit={search}>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              value={searchItem}
              onChange={(event) => setSearchItem(event.target.value)}
              type="search"
              id="default-search"
              class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

        <h1>Search</h1>
        <Products
          product={products}
          basket={basketfunction}
          isBasketView={basketView}
        />
      </div>
      <div>
        <p>{basket.price}</p>
      </div>
    </div>
  );
}

export default App;
