import Trash from "../../assets/icon-delete.svg";

const ListItem = ({
  productImage,
  productTitle,
  productPrice,
  productCount,
  totalPrices,
  handleDelete,
}) => {
  return (
    <>
      <div className="cartbox__list">
        <div className="cartbox__image">
          <img src={productImage} alt="" />
        </div>
        <p className="cartbox__product">
          <span>{productTitle}</span>
          <span>
            ${productPrice.toFixed(2)} x {productCount}
          </span>
          <span>${totalPrices.toFixed(2)}</span>
        </p>
        <div className="cartbox__trash" onClick={() => handleDelete()}>
          <img src={Trash} alt="delete" />
        </div>
      </div>
      <button className="cartbox__button">Checkout</button>
    </>
  );
};

export default ListItem;
