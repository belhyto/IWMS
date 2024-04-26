import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";

// Import images for superstore warehouse items
import groceriesImage from "../assets/img/grains.jpeg";
import householdGoodsImage from "../assets/img/house.jpeg";
import electronicsImage from "../assets/img/electronics.png";
import apparelImage from "../assets/img/clothes.jpg";
import healthBeautyImage from "../assets/img/cosmetics.jpeg";
import { UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,} from "reactstrap"; 
function Icons() {
  // Define an array of objects containing labels and corresponding images
  const items = [
    { label: "Groceries", image: groceriesImage },
    { label: "Household Goods", image: householdGoodsImage },
    { label: "Electronics", image: electronicsImage },
    { label: "Apparel and Accessories", image: apparelImage },
    { label: "Health and Beauty Products", image: healthBeautyImage },
    // Add more items as needed
  ];

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
              
                <h5 className="title">Superstore Warehouse Items</h5>
                
              </CardHeader>
              <CardBody className="all-icons">
                
                <Row>
                  
                  {items.map((item, index) => (
                    <Col lg={4} md={6} sm={6} xs={12} key={index}>
                      <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-round btn-outline-default "
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
                      <div className="item-card">
                        
                        <img src={item.image} alt={item.label} />
                        
                        <p className="item-label">{item.label}</p>
                      </div>
                    </Col>
                    
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Icons;
