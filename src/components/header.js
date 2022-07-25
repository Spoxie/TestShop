const Header = (props) => {
  const handleView = () => {
    props.updateBasketView(!props.basketView);
  };

  return (
    <div className="p-4 flex">
      <div class="basis-1/4">
        <h1>logo</h1>
      </div>

      <div class="basis-1/4">02</div>
      <div class="basis-1/4">03</div>
      <div class="basis-1/4" onClick={handleView}>
        <p>Total: {props.total}</p>
      </div>
    </div>
  );
};
export default Header;
