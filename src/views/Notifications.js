
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Row,
  inventoryChartData,
  Col,
  Alert,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Line } from "react-chartjs-2";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function Notifications() {
  const inventoryChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Total Inventory',
        data: [5000, 5200, 5100, 4900, 4800, 4900, 5000], // Sample inventory data over time
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      // Add more datasets for other inventory metrics if needed
    ],
  };
  const SecurityChart = {
    data: (canvas) => {
      const ctx = canvas.getContext("2d");
      const gradientStroke = ctx.createLinearGradient(5000, 0, 1000, 0);
      gradientStroke.addColorStop(0, "#18ce0f");
      gradientStroke.addColorStop(1, "#18ce0f");
  
      // Generate random data for each label
      const generateRandomData = (count) => {
        const data = [];
        for (let i = 0; i < count; i++) {
          data.push(Math.floor(Math.random() * 10)); // Generate random data points between 0 and 10
        }
        return data;
      };
  
      return {
        labels: new Array(50).fill(null).map((_, index) => ` ${index + 1}`), // Generate 50 labels
        datasets: [
          {
            label: "Air Quality",
            borderColor: "#18ce0f",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#18ce0f",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 0,
            fill: false,
            borderWidth: 2,
            tension: 0.4,
            data: generateRandomData(50), // Generate random data points for air quality
          },
          {
            label: "Hazardous Materials",
            borderColor: "#ff0000",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#ff0000",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 0,
            fill: false,
            borderWidth: 2,
            tension: 0.4,
            data: generateRandomData(50), // Generate random data points for hazardous materials
          },
          {
            label: "Unauthorized Access",
            borderColor: "#0000ff",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#0000ff",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 0,
            fill: false,
            borderWidth: 2,
            tension: 0.4,
            data: generateRandomData(50), // Generate random data points for unauthorized access
          },
        ],
      };
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
      },
    },
  };
  








  const TemperatureHumidityChart = {
    data: (canvas) => {
      const ctx = canvas.getContext("2d");
      const gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
      gradientStroke.addColorStop(0, "#ff9a00");
      gradientStroke.addColorStop(1, "#fae300");
  
      return {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Temperature (°C)",
            borderColor: "#ff9a00",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#ff9a00",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: false,
            borderWidth: 2,
            tension: 0.4,
            data: [20, 21, 22, 23, 24, 25], // Example temperature data
          },
          {
            label: "Humidity (%)",
            borderColor: "#fae300",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#fae300",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: false,
            borderWidth: 2,
            tension: 0.4,
            data: [50, 52, 55, 48, 49, 51], // Example humidity data
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontColor: "#333",
          fontSize: 12,
        },
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: false,
            },
            scaleLabel: {
              display: true,
              labelString: "Month",
              fontColor: "#333",
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            },
            scaleLabel: {
              display: true,
              labelString: "Value",
              fontColor: "#333",
            },
          },
        ],
      },
    },
  };

  


  const inventoryChartOptions = {}; // Define options for inventory chart
  const temperatureChartOptions = {};
  const notificationAlert = React.useRef();
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
           
          </div>
        </div>
      ),
      type: type,
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  };
  return (
    <>
      <PanelHeader
        content={
          <div className="header text-center">
            <h2 className="title">Live Monitoring Dashboard</h2>
            <p className="category">
            
              
            </p>
          </div>
        }
      />
       <div className="content">
        <Row>
          <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Inventory Management</h5>
                <CardTitle tag="h4">IoT Inventory Tracking</CardTitle>
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-round btn-outline-default btn-icon"
                    color="default"
                  >
                    <i className="now-ui-icons loader_gear" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem className="text-danger">
                      Remove data
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={inventoryChartData}
                    options={inventoryChartOptions}
                  />
                </div>
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons arrows-1_refresh-69" /> Just
                  Updated
                </div>
              </CardFooter>
            </Card>
            <Button
                            color="primary"
                            block
                            onClick={() => notify("tc")}
                          >
                            Top Center
                          </Button>
          </Col>
          <Col xs={12} md={4}>
  <Card className="card-chart">
    <CardHeader>
      <h5 className="card-category">Safety and Security</h5>
      <CardTitle tag="h4">IoT Safety and Security Monitoring</CardTitle>
      <UncontrolledDropdown>
        <DropdownToggle
          className="btn-round btn-outline-default btn-icon"
          color="default"
        >
          <i className="now-ui-icons loader_gear" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
          <DropdownItem className="text-danger">
            Remove data
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </CardHeader>
    <CardBody>
      <div className="chart-area">
        {/* Use Line or Bar chart as needed */}
        <Line
          data={SecurityChart.data}
          options={SecurityChart.options}
        />
      </div>
    </CardBody>
    <CardFooter>
      <div className="stats">
        <i className="now-ui-icons arrows-1_refresh-69" /> Just Updated
      </div>
    </CardFooter>
  </Card>
</Col>



<Col xs={12} md={4}>
  <Card className="card-chart">
    <CardHeader>
      <h5 className="card-category">Temperature and Humidity Monitoring</h5>
      <CardTitle tag="h4">Environmental Conditions</CardTitle>
    </CardHeader>
    <CardBody>
      <div className="chart-area">
        <Line
          data={TemperatureHumidityChart.data}
          options={TemperatureHumidityChart.options}
        />
      </div>
    </CardBody>
    <CardFooter>
      <div className="stats">
        <i className="now-ui-icons arrows-1_refresh-69" /> Just Updated
      </div>
    </CardFooter>
  </Card>
</Col>


          {/* Add more cards for other IoT metrics */}
        </Row>
      </div>
      <div className="content">
        <NotificationAlert ref={notificationAlert} />
        <Row>
          <Col md={6} xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Notifications Style</CardTitle>
              </CardHeader>
              <CardBody>
                <Alert color="info">
                  <span>This is a plain notification</span>
                </Alert>
                <Alert color="info" isOpen={true} toggle={() => {}}>
                  <span>This is a notification with close button.</span>
                </Alert>
                <Alert
                  color="info"
                  className="alert-with-icon"
                  isOpen={true}
                  toggle={() => {}}
                >
                  <span
                    data-notify="icon"
                    className="now-ui-icons ui-1_bell-53"
                  />
                  <span data-notify="message">
                    This is a notification with close button and icon.
                  </span>
                </Alert>
                <Alert
                  color="info"
                  className="alert-with-icon"
                  isOpen={true}
                  toggle={() => {}}
                >
                  <span
                    data-notify="icon"
                    className="now-ui-icons ui-1_bell-53"
                  />
                  <span data-notify="message">
                    This is a notification with close button and icon and have
                    many lines. You can see that the icon and the close button
                    are always vertically aligned. This is a beautiful
                    notification. So you don't have to worry about the style.
                  </span>
                </Alert>
              </CardBody>
            </Card>
          </Col>
          <Col md={6} xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Notification states</CardTitle>
              </CardHeader>
              <CardBody>
                <Alert color="primary" isOpen={true} toggle={() => {}}>
                  <span>
                    <b> Primary - </b> This is a regular notification made with
                    color="primary"
                  </span>
                </Alert>
                <Alert color="info" isOpen={true} toggle={() => {}}>
                  <span>
                    <b> Info - </b> This is a regular notification made with
                    color="info"
                  </span>
                </Alert>
                <Alert color="success" isOpen={true} toggle={() => {}}>
                  <span>
                    <b> Success - </b> This is a regular notification made with
                    color="success"
                  </span>
                </Alert>
                <Alert color="warning" isOpen={true} toggle={() => {}}>
                  <span>
                    <b> Warning - </b> This is a regular notification made with
                    color="warning"
                  </span>
                </Alert>
                <Alert color="danger" isOpen={true} toggle={() => {}}>
                  <span>
                    <b> Danger - </b> This is a regular notification made with
                    color="danger"
                  </span>
                </Alert>
              </CardBody>
            </Card>
          </Col>
          <Col md={12} xs={12}>
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col md={6} className="ml-auto mr-auto text-center">
                      <CardTitle tag="h4">
                        Notifications Places
                        <p className="category">Click to view notifications</p>
                      </CardTitle>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={8} xs={12} className="ml-auto mr-auto">
                      <Row>
                        <Col md={4} xs={12}>
                          <Button
                            color="primary"
                            block
                            onClick={() => notify("tl")}
                          >
                            Top Left
                          </Button>
                        </Col>
                        <Col md={4} xs={12}>
                          <Button
                            color="primary"
                            block
                            onClick={() => notify("tc")}
                          >
                            Top Center
                          </Button>
                        </Col>
                        <Col md={4} xs={12}>
                          <Button
                            color="primary"
                            block
                            onClick={() => notify("tr")}
                          >
                            Top Right
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={8} xs={12} className="ml-auto mr-auto">
                      <Row>
                        <Col md={4} xs={12}>
                          <Button
                            color="primary"
                            block
                            onClick={() => notify("bl")}
                          >
                            Bottom Left
                          </Button>
                        </Col>
                        <Col md={4} xs={12}>
                          <Button
                            color="primary"
                            block
                            onClick={() => notify("bc")}
                          >
                            Bottom Center
                          </Button>
                        </Col>
                        <Col md={4} xs={12}>
                          <Button
                            color="primary"
                            block
                            onClick={() => notify("br")}
                          >
                            Bottom Right
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Notifications;
