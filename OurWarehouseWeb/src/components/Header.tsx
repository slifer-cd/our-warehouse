import { FC, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { Link, useLocation } from "react-router-dom";
import "../sass/header.scss";
const Header: FC = (): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  function handle(): void {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handle);
    return (): void => {
      window.removeEventListener("resize", handle);
    };
  }, []);
  const { pathname: whereiam } = useLocation();
  useEffect(() => {
    if (windowWidth > 768) {
      Array.from(document.querySelectorAll(".nav-link")).forEach((e) => {
        e.removeAttribute("aria-current");
        if (e.getAttribute("href") === whereiam) {
          e.setAttribute("aria-current", "page");
        }
      });
    } else {
      Array.from(document.querySelectorAll(".phone-nav-link")).forEach((e) => {
        e.removeAttribute("aria-current");
        if (e.getAttribute("href") === whereiam) {
          e.setAttribute("aria-current", "page");
        }
      });
    }
  }, [whereiam, windowWidth]);
  function hanedleHamburgerClick(): void {
    const hamburgerBtn = document.getElementById(
      "hamburger-btn"
    ) as HTMLButtonElement;
    const phoneNav = document.getElementById("phone-nav") as HTMLElement;
    if (hamburgerBtn.getAttribute("aria-checked") === "false") {
      hamburgerBtn.setAttribute("aria-checked", "true");
      phoneNav.setAttribute("aria-expanded", "true");
    } else {
      hamburgerBtn.setAttribute("aria-checked", "false");
      phoneNav.setAttribute("aria-expanded", "false");
    }
  }
  return (
    <header className="w-100 overflow-hidden bg-light">
      <Container className="h-100">
        <div className="logo-container h-100" aria-label="logo">
          <img src="/logoWithoutBg.png" alt="logo-img" />
          <h1 className="logo-text text-body-tertiary">Our Warehouse</h1>
        </div>
        {windowWidth > 768 ? (
          <nav id="main-nav" className="h-100">
            <ul className="nav-list h-100">
              <li className="nav-item">
                <Link className="nav-link" to="/" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Storages">
                  Storages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        ) : (
          <>
            <button
              id="hamburger-btn"
              aria-label="menu toggle button"
              onClick={hanedleHamburgerClick}
              aria-checked="false"
            >
              <span className="mid-layer"></span>
            </button>
            <nav id="phone-nav" aria-expanded="false">
              <ul className="phone-nav-list">
                <li className="phone-nav-item">
                  <Link to="/" className="phone-nav-link" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="phone-nav-item">
                  <Link to="/Storages" className="phone-nav-link">
                    Storages
                  </Link>
                </li>
                <li className="phone-nav-item">
                  <Link to="About" className="phone-nav-link">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        )}
      </Container>
    </header>
  );
};

export default Header;
