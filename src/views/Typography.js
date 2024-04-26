
import React from "react";
import Chatbot from "./chatBot"; // Path to your Chatbot component

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function Typography() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        {/* Your existing content */}
        <Chatbot /> {/* Add this line to embed the chatbot */}
      </div>
      <div className="content">
        <Row>
          <Col md={12}>
            
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Typography;
