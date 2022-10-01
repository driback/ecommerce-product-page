import ListItem from "./ListItem";
import Nothing from "./Nothing";

const CartBox = ({
  productImage,
  productTitle,
  productPrice,
  productCount,
  totalPrices,
  handleDelete,
  data,
}) => {
  return (
    <div className="cartbox">
      <div className="cartbox__title">
        <h4>Cart</h4>
      </div>
      <div className="cartbox__footer">
        {data != null ? (
          <ListItem
            productImage={productImage}
            productTitle={productTitle}
            productPrice={productPrice}
            productCount={productCount}
            totalPrices={totalPrices}
            handleDelete={handleDelete}
          />
        ) : (
          <Nothing />
        )}
      </div>
    </div>
  );
};

export default CartBox;
