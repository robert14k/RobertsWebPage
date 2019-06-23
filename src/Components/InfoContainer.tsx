import React, { Component } from "react";
import Headshot from "../images/Fall_2018_headshot.jpg";
import { Row, Card, Avatar, Icon, Col, Divider } from "antd";
// import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "../Style.css";
import webPage from "../images/webPage.png";
import Project156 from "../images/156Project.png"
const { Meta } = Card;
export interface IInfoContainerProps {
  mobile: boolean;
}

export interface IInfoContainerState {
  //none
}

export default class InfoContainer extends Component<
  IInfoContainerProps,
  IInfoContainerState
> {
  static defaultProps = {};

  state: IInfoContainerState = {};
  openPdf = () => {
    window.open();
  };
  render() {
    return (
      <>
        <Row style={{ height: "64px" }}>
          <Avatar size={128} src={Headshot} style={{ zIndex: 1 }} />
        </Row>
        <div style={{ height: "80vh" }}>
          <Card
            style={{
              height: "auto",
              backgroundColor: "#ECECEC",
              borderColor: "#ECECEC"
            }}
          >
            <Row style={{ height: "64px" }} />
            <Row
              className="bodyHeaderFont"
              style={{ height: "40px", textAlign: "left" }}
            >
              <Icon
                style={{
                  height: "20px",
                  width: "20px",
                  color: "#2b3538",
                  margin: "5px"
                }}
                type="user"
              />
              About Me:
            </Row>
            <Row>
              I’m a sophomore at UNL studying software engineering with minors
              in business and mathematics. During the school year, I work as a
              Learning assistant for the computer science II class at UNL which
              is helping me to better my understanding of the Java programming
              language. This summer I am a software development intern at
              Buildertrend in Omaha. <p />I am the secretary and serve on the
              executive board of Phi Kappa Theta fraternity, an active member of
              the Newman Center on campus, and an avid Husker football fan. I am
              excited by new technologies and want to learn about the different
              disciplines of software and hardware engineering. With my spare
              time, I play and listen to music, and I am starting to learn and
              build an application in the JavaScript programming language.
            </Row>
            {/* <Row>
              <Col span={12}>
                <a onClick={this.openPdf}>hello</a>
              </Col>
              <Col span={12} />
            </Row> */}
            <Row
              className="bodyHeaderFont"
              style={{ height: "40px", textAlign: "left" }}
            >
              Projects:
            </Row>
            <Row>
              {!this.props.mobile && (
                <>
                  <Col span={10}>
                    <a href={"https://github.com/robert14k/RobertWebPage"} style={{margin: "20px"}}>
                      <Card
                        style={{
                          height: "auto",
                          backgroundColor: "#FFFFFF",
                          borderColor: "#ECECEC",
                          alignContent: "center",
                          maxWidth: "300"
                        }}
                        hoverable
                        cover={<img alt="example" src={webPage} />}
                      >
                        <Divider />
                        <Meta className="bodyTextFont"
                          title="This Website"
                          description="This was my first website created using react and typescript."
                        />
                      </Card>
                    </a>
                  </Col>
                  <Col span={4}/>
                  <Col span={10}>
                    <a href={"https://github.com/robert14k/156Project5.1"} style={{margin: "20px"}}>
                      <Card
                        style={{
                          height: "auto",
                          backgroundColor: "#FFFFFF",
                          borderColor: "#ECECEC",
                          alignContent: "center",
                          maxWidth: "300",
                          
                        }}
                        hoverable
                        cover={<img alt="example" src={Project156} />}
                      >
                        <Divider />
                        <Meta className="bodyTextFont"
                          title="Invoice Tracker"
                          description="This is a backend application written in Java and SQL to track invoices for a movie theater "
                        />
                      </Card>
                    </a>
                  </Col>
                </>
              )}
              {this.props.mobile && (
                <>
                  <Card
                    style={{
                      height: "auto",
                      backgroundColor: "#FFFFFF",
                      borderColor: "#ECECEC",
                      alignContent: "center",
                      maxWidth: "300",
                      margin: "20px"
                    }}
                    hoverable
                    cover={<img alt="example" src={webPage} />}
                  >
                    <Divider />
                    <Meta className="bodyTextFont"
                      title="This Website"
                      description="This was my first website created using react and typescript."
                    />
                  </Card>
                </>
              )}
            </Row>
          </Card>
          <Row className="footerFont">Created By: Robert Kirkpatrick</Row>
        </div>
      </>
    );
  }
}
