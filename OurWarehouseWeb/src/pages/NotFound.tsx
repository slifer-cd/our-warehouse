import { FC } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../sass/notfound.scss";
const NotFound: FC = () => {
  return (
    <Container className="d-flex align-items-center flex-column justify-content-center">
      <h1 className="text-center text-light">Not Found</h1>
      <Button className="btn-light w-50">
        <Link
          to="/"
          className="text-body text-capitalize text-decoration-none"
          style={{ fontWeight: "600", fontSize: "1.3em" }}
        >
          return to home page
        </Link>
      </Button>
    </Container>
  );
};

export default NotFound;
