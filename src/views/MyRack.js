import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import UserNotes from "../components/UserNotes";
import { AuthContext } from "../context/AuthContext";

function MyRack() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Row className="justify-content-center py-5 mt-4">
        <Col>
          <h1>my rack</h1>
          {user && <h5>hi {user.email.slice(0, user.email.indexOf("@"))}!</h5>}
          <h5>here are the books placed on your rack</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <UserNotes />
        </Col>
      </Row>
    </>
  );
}

export default MyRack;
