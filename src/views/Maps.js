import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import Spline from '@splinetool/react-spline';

function FullScreenMap() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>Warehouse 3D Map</CardHeader>
              <CardBody>
              <Spline scene="https://prod.spline.design/XmtP4RflZ9yFe2Pd/scene.splinecode" />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default FullScreenMap;
