import { FC, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { Link, useLocation } from "react-router-dom";
import "../sass/header.scss";
import { navLinksTextsAndPaths, title as pageTitle } from "../constants/";
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
    <header className="w-100 bg-light">
      <Container className="h-100">
        <div className="logo-container h-100" aria-label="logo">
          <img src="/logoWithoutBg.png" alt="logo-img" />
          <h1 className="logo-text text-body-tertiary">{pageTitle}</h1>
        </div>
        {windowWidth > 768 ? (
          <nav id="main-nav" className="h-100">
            <ul className="nav-list h-100">
              {navLinksTextsAndPaths.map((e) => (
                <li className="nav-item" key={e.id || null}>
                  <Link className="nav-link" to={e.path} aria-current="page">
                    {e.text}
                  </Link>
                </li>
              ))}
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
              <span className="first-layer"></span>
              <span className="mid-layer"></span>
              <span className="last-layer"></span>
            </button>
            <nav
              id="phone-nav"
              aria-expanded="false"
              className="w-100 bg-light"
            >
              <ul className="phone-nav list">
                {navLinksTextsAndPaths.map((e) => (
                  <li className="phone-nav item" key={e.id || null}>
                    <Link
                      className="phone-nav link"
                      to={e.path}
                      aria-current="page"
                    >
                      {e.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}
      </Container>
    </header>
  );
};

export default Header;
