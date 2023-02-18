import { FC } from "react";
import { Header } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/app.scss";

const App: FC = (): JSX.Element => {
  return (
    <>
      <Header />
    </>
  );
};

export default App;
