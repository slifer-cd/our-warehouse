import { FC } from "react";
import { Header } from "./components/";
import { NotFound } from "./pages";
import { Routes, Route } from "react-router-dom";
import "./sass/mian.scss";
const App: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <div style={{ marginTop: 70 }}>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
