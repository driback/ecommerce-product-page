import { useEffect, useState } from "react";
import Menu from "../../assets/icon-menu.svg";
import NavLogo from "./NavLogo";
import NavMobile from "./NavMobile";
import NavAvaCart from "./NavAvaCart";
import NavDesktop from "./NavDesktop";

const Navbar = ({ handleCarts, totalItems, data }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  const handeResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handeResize);

    return () => {
      window.removeEventListener("resize", handeResize);
    };
  }, []);

  const openBtn = () => {
    return (
      <div className="navbar__button" onClick={() => setOpen(() => true)}>
        <img src={Menu} alt="menu" />
      </div>
    );
  };

  return (
    <nav className="navbar">
      {/* Burger */}
      {windowWidth <= 480 ? openBtn() : null}

      {/* LOGO */}
      <NavLogo />

      {/* Links */}
      {windowWidth <= 480 ? (
        <NavMobile open={open} handleClose={() => setOpen(() => false)} />
      ) : (
        <NavDesktop />
      )}

      {/* Cart and Avatar */}
      <div className="navbar__right">
        <NavAvaCart
          handleCart={handleCarts}
          totalItem={totalItems}
          data={data}
        />
      </div>
    </nav>
  );
};

export default Navbar;
