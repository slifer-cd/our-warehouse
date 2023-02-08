import { FC } from "react";
import { Header } from "./components/";
import { NotFound, Main } from "./pages";
import { Routes, Route } from "react-router-dom";
import "./sass/mian.scss";
import { Container } from "react-bootstrap";
const App: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <div
        style={{
          marginTop: 70,
          backgroundColor: "black",
        }}
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
