import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Container />
        <Row>
          <Col>
            <img
              src={require("../Assets/ind.png").default}
              class="rounded float-right"
              alt="First slide"
            />
          </Col>

          {/* <br></br>
        <br></br> */}
          <Col>
            <p
              style={{
                fontFamily: "cursive",
                color: "#D61A1A",
                fontSize: "30px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {" "}
              FROM THE DESK OF CEO .!!
            </p>
            {/* <br></br> */}
            <p
              style={{
                fontFamily: "sans-serif",
                color: "#09B5B8",
                fontSize: "30px",
                textAlign: "center",
              }}
            >
              <br></br>
              Hi, This side{" "}
              <h
                style={{
                  fontFamily: "cursive",
                  color: "#000000",
                }}
              >
                Aarish khan{" "}
              </h>
              , <br></br>
              one of the world famous<br></br>
              businessman entrepreneur. <br></br>I found watch company in{" "}
              <br></br>
              Modipuram Meerut. I completed <br></br>
              my studies from abroad from <br></br>
              the course of bachelor in <br></br>
              Computers. Now i handle my <br></br>
              Business.
            </p>
          </Col>
          {/* <Col>
            
            </Col> */}
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p
          style={{
            fontFamily: "sans-serif",
            color: "#6266B5",
            fontSize: "70px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Indian Watch House{" "}
        </p>
        <p
          style={{
            fontFamily: "sans-serif",
            color: "#000000",
            fontSize: "27px",
            textAlign: "center",
            fontWeight: "lighter",
          }}
        >
          {" "}
          Watch store in Modipuram <br></br>
          Open at 10:00 am{" "}
        </p>
        <br></br>
        <Container fluid="md">
          <Row className="justify-content-md-center">
            <Col md="auto">
              <img
                src={require("../Assets/img3.jpg").default}
                class="rounded float-right"
                alt="First slide"
                width="100%"
                height="100%"
              />
            </Col>
          </Row>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p
          style={{
            fontFamily: "sans-serif",
            color: "#000000",
            fontSize: "20px",
            textAlign: "center",
            fontWeight: "lighter",
          }}
        >
          ___________
        </p>
        <p
          style={{
            fontFamily: "sans-serif",
            color: "#000000",
            fontSize: "20px",
            textAlign: "center",
            fontWeight: "lighter",
          }}
        >
          UPDATES
        </p>
        <br></br>
        <br></br>
        <Container>
          <Row>
            <Col>
              <img
                src={require("../Assets/watch.jpg").default}
                class="rounded float-right"
                alt="First slide"
                width="90%"
                height="70%"
              />

              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#000000",
                  fontSize: "27px",
                  textAlign: "center",
                  fontWeight: "lighter",
                }}
              >
                SKMEI WATCH{" "}
              </p>
            </Col>
            <Col>
              <img
                src={require("../Assets/watch2.jpg").default}
                class="rounded float-right"
                alt="First slide"
                width="90%"
                height="70%"
              />
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#000000",
                  fontSize: "27px",
                  textAlign: "center",
                  fontWeight: "lighter",
                }}
              >
                OLENS WATCH{" "}
              </p>
            </Col>
            <Col>
              <img
                src={require("../Assets/watch3.jpg").default}
                class="rounded float-right"
                alt="First slide"
                width="90%"
                height="70%"
              />
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#000000",
                  fontSize: "27px",
                  textAlign: "center",
                  fontWeight: "lighter",
                }}
              >
                MEGALITH WATCH{" "}
              </p>
            </Col>
          </Row>
        </Container>
        <br></br>
        <br></br>
        <Container>
          <Row>
            <Col>
              <img
                src={require("../Assets/clock22.jpg").default}
                class="rounded float-right"
                alt="First slide"
                width="90%"
                height="70%"
              />
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#000000",
                  fontSize: "27px",
                  textAlign: "center",
                  fontWeight: "lighter",
                }}
              >
                WALL CLOCK{" "}
              </p>
            </Col>
            <Col>
              <img
                src={require("../Assets/clock-z.jpg").default}
                class="rounded float-right"
                alt="First slide"
                width="90%"
                height="70%"
              />
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#000000",
                  fontSize: "27px",
                  textAlign: "center",
                  fontWeight: "lighter",
                }}
              >
                WALL CLOCK{" "}
              </p>
            </Col>
            <Col>
              <img
                src={require("../Assets/images.jpg").default}
                class="rounded float-right"
                alt="First slide"
                width="90%"
                height="70%"
              />
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#000000",
                  fontSize: "27px",
                  textAlign: "center",
                  fontWeight: "lighter",
                }}
              >
                WALL CLOCK{" "}
              </p>
            </Col>
          </Row>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Container>
          <Row>
            <Col>
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#0e91c4",
                  fontSize: "18px",
                  textAlign: "right",
                  fontWeight: "lighter",
                }}
              >
                WRITE A REVIEW
              </p>
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#0e91c4",
                  fontSize: "20px",
                  textAlign: "right",
                  fontWeight: "lighter",
                }}
              >
                _____________
              </p>
            </Col>
            <Col>
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#0e91c4",
                  fontSize: "20px",
                  textAlign: "left",
                  fontWeight: "lighter",
                }}
              >
                READ MORE
              </p>
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#0e91c4",
                  fontSize: "20px",
                  textAlign: "left",
                  fontWeight: "lighter",
                }}
              >
                __________
              </p>
            </Col>
          </Row>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <Container>
          <Row>
            <Col>
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#000000",
                  fontSize: "20px",
                  textAlign: "center",
                  fontWeight: "lighter",
                }}
              >
                ________
              </p>
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#000000",
                  fontSize: "20px",
                  textAlign: "center",
                  fontWeight: "lighter",
                }}
              >
                Gallery
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <img
                src={require("../Assets/a1.JPG").default}
                class="rounded float-right"
                alt="First slide"
                width="90%"
                height="70%"
              />
            </Col>
            <Col>
              <img
                src={require("../Assets/a2.JPG").default}
                class="rounded float-right"
                alt="First slide"
                width="90%"
                height="70%"
              />
            </Col>
            <Col>
              <img
                src={require("../Assets/a3.jpg").default}
                class="rounded float-right"
                alt="First slide"
                width="90%"
                height="70%"
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <img
                src={require("../Assets/a4.jpg").default}
                class="rounded float-right"
                alt="First slide"
                width="90%"
                height="70%"
              />
            </Col>
            <Col>
              <img
                src={require("../Assets/a5.jpg").default}
                class="rounded float-right"
                alt="First slide"
                width="90%"
                height="70%"
              />
            </Col>
            <Col>
              <img
                src={require("../Assets/a6.JPG").default}
                class="rounded float-right"
                alt="First slide"
                width="90%"
                height="70%"
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#000000",
                  fontSize: "20px",
                  textAlign: "center",
                  fontWeight: "lighter",
                }}
              >
                _______
              </p>
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#000000",
                  fontSize: "18px",
                  textAlign: "center",
                  fontWeight: "lighter",
                }}
              >
                CONTACT US
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#000000",
                  fontSize: "30px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                CONTACT
              </p>
              <p
                style={{
                  textAlign: "center",
                }}
              >
                <div className="mb-2">
                  <Button variant="primary" size="lg">
                    Call NOW{" "}
                  </Button>{" "}
                </div>
              </p>
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#000000",
                  fontSize: "18px",
                  textAlign: "center",
                  fontWeight: "lighter",
                }}
              >
                +918439451544
              </p>
            </Col>
            <Col>
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#000000",
                  fontSize: "30px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                ADDERESS
              </p>
              <p
                style={{
                  textAlign: "center",
                }}
              >
                <div className="mb-2">
                  <Button variant="primary" size="lg">
                    GET DIRECTION{" "}
                  </Button>{" "}
                </div>
              </p>
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#000000",
                  fontSize: "18px",
                  textAlign: "center",
                  fontWeight: "lighter",
                }}
              >
                Chauhan market,<br></br> modipuram Meerut ,250110<br></br>India
              </p>
            </Col>
            <Col>
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#000000",
                  fontSize: "30px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Business Hours
              </p>
              <p
                style={{
                  textAlign: "center",
                }}
              ></p>
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#000000",
                  fontSize: "18px",
                  textAlign: "center",
                  fontWeight: "lighter",
                }}
              >
                Mon: 10:00 AM - 10:00 PM<br></br>
                Tue: 10:00 AM - 10:00 PM<br></br>
                Wed: 10:00 AM - 10:00 PM<br></br>
                Thu: 10:00 AM - 10:00 PM<br></br>
                Fri: 10:00 AM - 10:00 PM<br></br>
                Sat: 10:00 AM - 10:00 PM<br></br>
                Sun: 10:00 AM - 10:00 PM<br></br>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
