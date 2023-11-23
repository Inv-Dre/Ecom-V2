import PropTypes from "prop-types";

export default function NavLinks({ links }) {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

NavLinks.propTypes = {
  links: PropTypes.array.isRequired,
};