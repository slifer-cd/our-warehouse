import { FC, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../sass/mainpage.scss";
const main: FC = (): JSX.Element => {
  return (
    <Container className="main-container">
      <main className="d-flex d-xl-block align-items-center flex-column">
        <h1 className="text-capitalize text-center text-lg-start mb-5">
          welcome to your warehouse
        </h1>
        <p className="text-light text-center fs-1 p1 align-self-start">
          The place that we hope you to any equipment you want.
        </p>
        <p className="p2 align-self-start fs-3 text-left">
          Equipments and working tools are quiet expensive and hard to store, so
          we kind of found a solution for that, by distribute some storages
          around the country, and everyone of them have various equipments and
          tools that you are able to rent them for a Nominal amount
        </p>
      </main>
    </Container>
  );
};

export default main;
