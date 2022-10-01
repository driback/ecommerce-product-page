import Logo from "../../assets/logo.svg";

const NavLogo = () => {
  return (
    <>
      <div className="navbar__logo">
        <img src={Logo} alt="Logo" />
      </div>
    </>
  );
};

export default NavLogo;
