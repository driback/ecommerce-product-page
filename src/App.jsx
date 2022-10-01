import Navbar from "./components/Navbar/Navbar";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Content from "./components/Content/Content";
import Buttons from "./components/Buttons/Buttons";
import CartBox from "./components/CartBox/CartBox";
import datas from "./datas";
import { useState } from "react";
import Product from "./assets/image-product-1-thumbnail.jpg";

const App = () => {
  const [itemCount, setItemCount] = useState(0);
  const [dataItem, setDataItem] = useState(null);
  const [openCart, setOpenCart] = useState(false);

  const handlePlus = () => {
    setItemCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    setItemCount((prev) => (prev >= 1 ? prev - 1 : 0));
  };
  const handleCart = () => {
    setDataItem(() =>
      itemCount != 0
        ? {
            ...datas,
            discountPrice: datas.discountPrice * itemCount,
            totalItem: itemCount,
          }
        : null
    );
  };

  const handleDelete = () => {
    setDataItem(() => null);
  };

  const handleCarts = () => {
    setOpenCart((prev) => !prev);
  };

  return (
    <div className="container">
      <header>
        <Navbar
          handleCarts={handleCarts}
          totalItems={dataItem === null ? null : dataItem.totalItem}
          data={dataItem}
        />

        {openCart && (
          <CartBox
            productImage={Product}
            productTitle={dataItem === null ? null : dataItem.productTitle}
            productPrice={dataItem === null ? null : datas.discountPrice}
            productCount={dataItem === null ? null : dataItem.totalItem}
            totalPrices={dataItem === null ? null : dataItem.discountPrice}
            handleDelete={handleDelete}
            data={dataItem}
          />
        )}
      </header>
      <main className="main">
        <section className="main__image">
          <ImageSlider />
        </section>
        <section className="main__content">
          <Content />
          <Buttons
            handleCart={handleCart}
            handlePlus={handlePlus}
            handleMinus={handleMinus}
            totalItem={itemCount}
          />
        </section>
      </main>
    </div>
  );
};

export default App;
