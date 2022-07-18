//using this as a placeholder for backendstuff, I might do a backend later.

import axios from "axios";

const url = "https://dummyjson.com/products";

const getAll = () => {
  const req = axios.get(url);
  return req.then((res) => res.data);
};
const searchProduct = (search) => {
  const req = axios.get(`${url}/search?q=${search}`);
  return req.then((res) => res.data);
};

export default { getAll, searchProduct };
