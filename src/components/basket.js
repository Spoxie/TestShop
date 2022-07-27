import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Basket = (props) => {
  function emptyBasket() {
    props.setBasketItems([]);
    props.setTotal(0);
    return;
  }
  const navigate = useNavigate();
  function setDelivery() {
    props.setBasketView(!props.basketView);
    navigate("/delivery");
    return;
  }

  const basket = props.basketItems;
  console.log(basket);
  return (
    <div
      className={
        props.basketView === false
          ? "hidden"
          : "flex fixed top-0 left-0 right-0 bottom-0 z-50 overflow-hidden bg-gray-500 bg-opacity-75 "
      }
    >
      <div className="absolute bottom-0 left-0 top-0 right-0 bg-orange-200 w-100 opacity-100 m-10 overflow-auto overscroll-none">
        <FontAwesomeIcon
          className="z-20 absolute right-0 w-20 h-20"
          icon={faXmark}
          onClick={() => props.setBasketView(!props.basketView)}
        />
        <div>
          <p className="text-2xl text-left m-10">
            Total is {props.total} dollars
          </p>
        </div>
        <div className="flex">
          <div className="text-2xl text-center m-10" onClick={setDelivery}>
            BUY ALL
          </div>
          <div
            className="text-2xl text-center m-10"
            onClick={() => emptyBasket()}
          >
            Empty basket
          </div>
        </div>

        <div className="flex flex-wrap">
          {basket.map((product, i) => (
            <div className="max-w-sm rounded basis-1/3" key={product.i}>
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
