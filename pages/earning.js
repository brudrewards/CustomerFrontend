import React from "react";
import { Container, Col, Row } from "react-bootstrap";
const Earning = () => {
  const displayDetail = () => {
    return (
      <div>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column">
            <span>#578252</span>
            <span>10-12-2021, 10:45</span>
            <span className="text-muted">Andrew Peter</span>
          </div>

          <div className="d-flex flex-column">
            <span>$62</span>
            <span>credit card</span>
          </div>
        </div>
        <hr />
      </div>
    );
  };
  return (
    <div id="earning" className="px-1">
      {/* header */}
      <Container className="sticky-top bg-white">
        <h1 className="text-center">Earning</h1>
        <Row className="bg-black round py-4 ps-4 pe-3">
          <Col className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <span className="text-white">Total Revenue</span>
              <span className="text-white fw-bold fs-2">$6,234</span>
            </div>
            <span>icon</span>
          </Col>
          <Row className="pt-4">
            <Col sm={5} md={3}>
              <button className="btn w-100">Withdraw</button>
            </Col>
          </Row>
        </Row>

        <Row>
          <Col>
            <h6 className="pt-5">Earning Details</h6>
          </Col>
        </Row>
      </Container>

      <Container>
        <div>{displayDetail()}</div>
        <div>{displayDetail()}</div>
        <div>{displayDetail()}</div>
        <div>{displayDetail()}</div>
        <div>{displayDetail()}</div>
        <div>{displayDetail()}</div>
        <div>{displayDetail()}</div>
        <div>{displayDetail()}</div>
        <div>{displayDetail()}</div>
        <div>{displayDetail()}</div>
        <div>{displayDetail()}</div>
        <div>{displayDetail()}</div>
      </Container>
    </div>
  );
};

export default Earning;
