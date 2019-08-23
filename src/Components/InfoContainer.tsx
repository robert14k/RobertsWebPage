import React, { Component } from "react";
import Headshot from "../images/Fall_2018_headshot.jpg";
import { Row, Card, Avatar, Icon, Col, Divider } from "antd";
// import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "../Style.css";
import webPage from "../images/webPage.png";
import project156 from "../images/project156.png";
import ProjectEntity from "../Modals/ProjectEntity";
// import idk from "../images/idk.gif";
import Project from "./Project";
export interface IInfoContainerProps {
  mobile: boolean;
}

export interface IInfoContainerState {
  //none
}
let projects: ProjectEntity[] = [];
let project1 = new ProjectEntity({
  picture: webPage,
  title: "This web site",
  description:
    "This is my first website created using react and typescript. I decided to create this as a way to learn how to build, deploy, and host a website.",
  link: "https://github.com/robert14k/RobertWebPage",
  isLeft: false
});
let project2 = new ProjectEntity({
  picture: project156,
  title: "Invoice Tracker",
  description:
    "This is a backend application written in Java and SQL to track invoices for a movie theater.",
  link: "https://github.com/robert14k/156Project5.1",
  isLeft: true
});
// let project3 = new ProjectEntity({
//   picture: idk,
//   title: "Python and Kivy application",
//   description:
//     "It's in progress, come back later. do i jut need more words? is that it? dats bull shit ",
//   link: "",
//   isLeft: false
// });
projects[0] = project1;
projects[1] = project2;
// projects[2] = project3;

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
            <Row
              className="bodyHeaderFont"
              style={{ height: "40px", textAlign: "left" }}
            >
              Projects:
            </Row>
            <Row>
              <Project isMobile={this.props.mobile} projects={projects} />
            </Row>
            <Divider/>
            <Row
              className="bodyHeaderFont"
              style={{ height: "40px", textAlign: "center" }}
            >
              <Col span={8}>
                <a href={"/Resume.pdf"} style={{color: "#2b3538"}}>Resume</a>
              </Col>
              <Col span={8}>
                <a href={"https://github.com/robert14k"}>
                  <Icon
                    style={{
                      height: "20px",
                      width: "20px",
                      color: "#2b3538",
                      margin: "5px"
                    }}
                    type="github"
                  />
                </a>
              </Col>
              <Col span={8}>
                <a href={"https://www.linkedin.com/in/robert-kirkpatrick-79282916a/"}>
                  <Icon
                    style={{
                      height: "20px",
                      width: "20px",
                      color: "#2b3538",
                      margin: "5px"
                    }}
                    type="linkedin"
                  />
                </a>
              </Col>
            </Row>
          </Card>
          <Row className="footerFont">Created By: Robert Kirkpatrick</Row>
        </div>
      </>
    );
  }
}
