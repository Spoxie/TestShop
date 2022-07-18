const Header = (props) => {
  const totalPriceItems = [];
  var sum = totalPriceItems.reduce(function (a, b) {
    return a + b;
  }, 0);

  props.total.map((item) => {
    totalPriceItems.push(item.price);
  });
  console.log(sum);
  console.log(totalPriceItems);

  return (
    <div className="p-4 flex">
      <div class="basis-1/4">
        <h1>logo</h1>
      </div>

      <div class="basis-1/4">02</div>
      <div class="basis-1/2">03</div>
      <div>{sum}</div>
    </div>
  );
};
export default Header;
