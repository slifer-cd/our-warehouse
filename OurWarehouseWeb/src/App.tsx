import { FC } from "react";
import { Header } from "./components/";
import { NotFound } from "./pages";
import { Routes, Route } from "react-router-dom";
const App: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
