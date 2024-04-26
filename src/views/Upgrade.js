import React, { Component } from "react";
import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
} from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function Upgrade() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col>
            {/* Embed the Canva video animation */}
            <video
              width="100%"
              autoPlay
              loop
              muted
              style={{
                maxWidth: "800px", // Set maximum width
                borderRadius: "8px",
                boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                margin: "1.6em 0.9em",
              }}
            >
              <source src={require("../assets/img/map.mp4")} type="video/mp4" />
              {/* Provide alternative content if the video cannot be loaded */}
              Your browser does not support the video tag.
            </video>
            {/* Table with upgrade information */}
            <Card>
              <CardHeader>
                <CardTitle>Warehouse Number #1738</CardTitle>
                <p className="category">
                  
                </p>
              </CardHeader>
              <CardBody>
              <Table responsive>
                  <thead>
                    <tr>
                      <th />
                      <th className="text-center"></th>
                      <th className="text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Location:</td>
                      <td className="text-center">Cape Town, </td>  
                      <td className="text-center">South Africa</td>
                    </tr>
                    <tr>
                      <td>Address:</td>
                      <td className="text-center"> 123 Warehouse Street, </td>
                      <td className="text-center"> Cape Town, SA</td>
                    </tr>
                    <tr>
                      <td>Contact Information:</td>
                      <td className="text-center"> +27 123 456 7890</td>
                      <td className="text-center">
                        <i className="fa fa-check text-success" />
                      </td>
                     
                    </tr>
                    <tr>
                      <td>Warehouse Manager:</td>
                      <td className="text-center"> John Smith</td>
                      <td className="text-center">
                        <i className="fa fa-check text-success" />
                      </td>
                     
                    </tr>
                    <tr>
                      <td>Operational Status</td>
                      <td className="text-center">
                        <i className="fa fa-check text-success" />
                      </td>
                      <td className="text-center">
                        <i className="fa fa-check text-success" />
                      </td>
                    </tr>
                    <tr>
      <td >Total Inventory</td>
      <td className="text-center" >5000 units</td>
    </tr>
    <tr>
      <td >Inventory Turnover Rate</td>
      <td className="text-center" >3.5 times/month</td>
    </tr>
    <tr>
      <td >Inventory Alerts</td>
      <td className="text-center">Low Inventory for Electronics</td>
    </tr>
    <tr>
      <td>Environmental Conditions</td>
      <td></td>
    </tr>
    <tr>
      <td>&emsp;Temperature</td>
      <td className="text-center">25°C</td>
    </tr>
    <tr>
      <td>&emsp;Humidity</td>
      <td className="text-center">60%</td>
    </tr>
    <tr>
      <td>&emsp;Air Quality</td>
      <td className="text-center">Good (AQI: 30)</td>
    </tr>
    <tr>
      <td>Security Status</td>
      <td ></td>
    </tr>
    <tr>
      <td>&emsp;Surveillance Cameras</td>
      <td className="text-center">10 cameras</td>
    </tr>
    <tr>
      <td>&emsp;Security Guards</td>
      <td className="text-center">4 guards</td>
    </tr>
    <tr>
      <td>&emsp;Security Alerts</td>
      <td className="text-center">None</td>
    </tr>
    <tr>
      <td>Logistics Information</td>
      <td></td>
    </tr>
    <tr>
      <td>&emsp;Current Shipments</td>
      <td className="text-center">20 shipments</td>
    </tr>
    <tr>
      <td>&emsp;Delivery Status</td>
      <td className="text-center">On schedule</td>
    </tr>
    <tr>
      <td>&emsp;Logistics Alerts</td>
      <td className="text-center">None</td>
    </tr>
                  
                    <tr>
                      <td />
                      <td className="text-center">
                        <Button href="#" color="default" className="btn-round">
                          Current Version
                        </Button>
                      </td>
                      <td className="text-center">
                        <Button
                          target="_blank"
                          href=""
                          color="info"
                          className="btn-round"
                        >
                          Check stocks  
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Upgrade;
