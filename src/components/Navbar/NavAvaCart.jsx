import Cart from "../../assets/icon-cart.svg";
import Avatar from "../../assets/image-avatar.png";

const NavAvaCart = ({ handleCart, totalItem, data }) => {
  return (
    <div className="navbar__right">
      <div className="navbar__cart" onClick={() => handleCart()}>
        <img src={Cart} alt="Cart" />

        {data != null ? (
          <span className="navbar__cart--item">{totalItem}</span>
        ) : null}
      </div>
      <div className="navbar__avatar">
        <img src={Avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default NavAvaCart;
