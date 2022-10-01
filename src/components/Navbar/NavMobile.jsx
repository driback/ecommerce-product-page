import Close from "../../assets/icon-close.svg";

const NavMobile = ({ handleClose, open }) => {
  const links = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <>
      <div
        className="navbar__links"
        style={{ translate: `${open ? 0 : -100}%` }}
      >
        <div className="navbar__close" onClick={() => handleClose()}>
          <img src={Close} alt="close" />
        </div>
        {links.map((link) => (
          <li key={links.indexOf(link)}>
            <a>{link}</a>
          </li>
        ))}
      </div>
      <div
        className="navbar__bscreen"
        style={{
          opacity: `${open ? 0.8 : 0}`,
          visibility: open ? "visible" : "hidden",
        }}
        onClick={() => handleClose()}
      ></div>
    </>
  );
};

export default NavMobile;
