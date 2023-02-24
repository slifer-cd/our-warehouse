import { FC } from "react";
import { Header } from "./components";
import { MainPage, AboutPage, StoragesPage, NotFoundPage } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/app.scss";
import { Route, Routes } from "react-router-dom";

const App: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Storages" element={<StoragesPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
