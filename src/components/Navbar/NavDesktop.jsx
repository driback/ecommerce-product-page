const NavDesktop = () => {
  const links = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <div className="navbar__links">
      {links.map((link) => (
        <li key={links.indexOf(link)}>
          <a className="navbar__link">{link}</a>
        </li>
      ))}
    </div>
  );
};

export default NavDesktop;
