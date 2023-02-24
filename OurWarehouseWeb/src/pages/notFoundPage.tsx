import { FC } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const notFoundPage: FC = () => {
  console.log(window.location);
  return (
    <Container className="d-flex justify-content-center algin-items-center">
      <Button className="fs-1 btn btn-danger">
        <Link to="/" className="text-decoration-none text-white">
          Return
        </Link>
      </Button>
    </Container>
  );
};

export default notFoundPage;
