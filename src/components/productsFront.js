const Products = ({ product, basket, isBasketView }) => {
  return (
    <div
      className={
        isBasketView === true
          ? "grid grid-cols-4 gap-4 pointer-events-none"
          : "grid grid-cols-4 gap-4"
      }
    >
      {product.map((product, i) => (
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg"
          key={product.i}
          onClick={() => basket(product)}
        >
          <div className="px-6 py-4">
            <img src={product.images[0]} alt="product"></img>
            <div class="font-bold text-xl mb-2">{product.title}</div>
            <p class="text-gray-700 text-base">{product.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {product.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Products;
