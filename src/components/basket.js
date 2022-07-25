const Basket = (props) => {
  const basket = props.basketItems;
  console.log(basket);
  return (
    <div
      className={
        props.basketView === false
          ? "hidden"
          : "flex fixed top-0 left-0 right-0 bottom-0 z-50 overflow-hidden bg-gray-500 bg-opacity-75 flex flex-col items-center justify-center m-10 mx-20 "
      }
    >
      <div className="absolute bottom-0 left-0 top-0 right-0 bg-orange-800 w-100 opacity-100 m-10 overflow-auto overscroll-none">
        <div>
          {basket.map((product, i) => (
            <div className="max-w-sm rounded shadow-lg" key={product.i}>
              <div className="px-6 py-4">
                <img src={product.images[0]} alt="product"></img>
                <div class="font-bold text-xl mb-2">{product.title}</div>
                <p class="text-gray-700 text-base">{product.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Basket;
