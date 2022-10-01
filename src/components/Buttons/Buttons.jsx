import Minus from "../../assets/icon-minus.svg";
import Plus from "../../assets/icon-plus.svg";
import Cart from "../../assets/icon-cart-white.svg";

const Buttons = ({ handleCart, handlePlus, handleMinus, totalItem }) => {
  return (
    <>
      <div className="button">
        <div className="button__incdec">
          <button
            className="button__minus"
            onClick={() => handleMinus()}
            disabled={totalItem === 0}
          >
            <img src={Minus} alt="minus" />
          </button>
          <span className="button__value">{totalItem}</span>
          <button className="button__plus" onClick={() => handlePlus()}>
            <img src={Plus} alt="plus" />
          </button>
        </div>
        <button className="button__cart" onClick={() => handleCart()}>
          <img src={Cart} alt="cart" /> Add to cart
        </button>
      </div>
    </>
  );
};

export default Buttons;
