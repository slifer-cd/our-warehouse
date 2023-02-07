import { FC, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../sass/header.scss";
import { Link } from "react-router-dom";
const Header: FC = (): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [pressed, setPressed] = useState(false);
  useEffect((): (() => void) => {
    const handelResize = (): void => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handelResize);
    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, []);

  return (
    <header className="bg-light w-100">
      <Container className="d-flex justify-content-between align-items-center h-100">
        <div className="h-100 d-flex align-items-center logo">
          <img
            src="/welcomeLogo.png"
            alt="our warehouse logo"
            className="h-100"
          />
          <Link to="/" className="font-weight-bold text-decoration-none">
            our warehouse
          </Link>
        </div>
        {windowWidth > 720 ? (
          <ul className="d-flex align-items-center h-100 non">
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
        ) : (
          <>
            <div
              className="spans-container position-relative h-100"
              onClick={(e): void => {
                setPressed((pre) => !pre);
                e.currentTarget.classList.toggle("pressed");
                document.querySelector(".is")?.classList.toggle("pressed");
              }}
            >
              <span className="span-1 bg-secondary w-50 d-inline-block"></span>
              <span className="span-2 bg-secondary w-50 d-inline-block"></span>
              <span className="span-3 bg-secondary w-50 d-inline-block"></span>
            </div>
            <ul className="position-absolute is w-100 bg-light d-flex flex-column">
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
          </>
        )}
      </Container>
    </header>
  );
};

export default Header;
