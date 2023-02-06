import { FC, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../sass/header.scss";
import { Link } from "react-router-dom";
const Header: FC = (): JSX.Element => {
  return (
    <header className="overflow-hidden bg-light">
      <Container className="d-flex justify-content-between align-items-center h-100">
        <div className="h-100 d-flex align-items-center">
          <img
            src="/welcomeLogo.png"
            alt="our warehouse logo"
            className="h-100"
          />
          <Link to="/" className="font-weight-bold text-decoration-none">
            our warehouse
          </Link>
        </div>
        <ul className="d-flex align-items-center h-100">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Storages">Storages</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
