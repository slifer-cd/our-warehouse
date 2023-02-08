import { FC, useEffect, useState } from "react";
import { Header } from "./components/";
import { NotFound, Main } from "./pages";
import { Routes, Route } from "react-router-dom";
import "./sass/mian.scss";
import { Button } from "react-bootstrap";

import { BsFillCaretUpFill } from "react-icons/bs";
const App: FC = (): JSX.Element => {
  const [webHeight, setwebHeight] = useState(window.scrollY);

  function handle() {
    setwebHeight(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handle);
    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, []);

  return (
    <>
      <Header />
      <div
        style={{
          marginTop: 70,
          backgroundColor: "black",
          height: "100%",
        }}
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {webHeight > 720 && (
          <Button
            className="scrollUpBtn d-flex justify-content-center align-items-center"
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
          >
            <BsFillCaretUpFill />
          </Button>
        )}
      </div>
    </>
  );
};

export default App;
