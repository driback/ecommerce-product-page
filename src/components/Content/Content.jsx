import datas from "../../datas.js";

const Content = () => {
  const {
    company,
    productTitle,
    productDescription,
    discount,
    discountPrice,
    price,
  } = datas;

  return (
    <div className="content">
      <h4 className="content__company">{company}</h4>
      <h1 className="content__title">{productTitle}</h1>
      <p className="content__desc">{productDescription}</p>
      <div className="content__prices">
        <span className="content__discountprice">
          ${discountPrice.toFixed(2)}
        </span>
        <span className="content__discount">{discount}%</span>
        <span className="content__price">${price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Content;
