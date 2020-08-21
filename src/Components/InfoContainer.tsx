import React, { Component } from "react";
import Headshot from "../images/Fall_2018_headshot.jpg";
import { Row, Card, Avatar, Icon, Col, Divider } from "antd";
// import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "../Style.css";
import webPage from "../images/webPage.png";
import project156 from "../images/project156.png";
import reactDjango from "../images/react_django.png";
import pitivi from "../images/pitivi.png";
import ProjectEntity from "../Modals/ProjectEntity";
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
  isLeft: false,
});
let project2 = new ProjectEntity({
  picture: project156,
  title: "Invoice Tracker",
  description:
    "This is a backend application written in Java and SQL to track invoices for a movie theater.",
  link: "https://github.com/robert14k/156Project5.1",
  isLeft: true,
});
let project3 = new ProjectEntity({
  picture: reactDjango,
  title: "Blog",
  description:
    "This is a blog website that I am currently working on. I am creating it to strengthen my web api skills and learn to use django, python, react, and redux.",
  link: "https://github.com/robert14k/BlogSite",
  isLeft: false,
});
let project4 = new ProjectEntity({
  picture: pitivi,
  title: "Pitivi",
  description:
    "Pitivi is an open source video editor for Linux. My software class is contributing to Pitivi while learning software development techniques through sprint planning, status meetings, and handoff presentations.",
  link: "https://gitlab.gnome.org/bracciata/pitivi/-/tree/solid_color_clips",
  isLeft: true,
});
projects[0] = project3;
projects[2] = project1;
projects[3] = project2;
projects[1] = project4;

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
              borderColor: "#ECECEC",
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
                  margin: "5px",
                }}
                type="user"
              />
              About Me:
            </Row>
            <Row>
              I am a senior at UNL studying software engineering with minors in
              business and mathematics. This past summer, I had an opportunity
              to be a software development intern at Hudl in Lincoln. I worked
              with a talented team of full-time engineers on their payment and 
              subscription management related micro-services. I was able to use
              the knowledge I had gained in class about scrum and agile, and 
              apply it to my work at Hudl. Over the course of the two summers 
              prior, I interned at Buildertrend and Northrop Grumman. This school 
              year I am excited to be an associate member of the Raikes School
              Design Studio Program.
              <p/> 
              Outside of school, I am a brother of Phi Kappa Theta
              Fraternity, an active member of the Newman Center on campus, and
              an avid Husker football fan. This summer I married my highschool
              sweetheart and am excited to explore the world with her. Speaking
              of exploring the world, I love to travel; I spent this past Christmas
              break in India and can now check the Taj Mahal off my list!  With my 
              spare time, I play and listen to music, read books while sipping 
              coffee, and I am working on building a full-stack web app with a
              React.js and Apollo front-end and a Python and GraphQL back-end.
            </Row>
            <Row
              className="bodyHeaderFont"
              style={{ height: "40px", textAlign: "left" }}
            >
              <Icon
                style={{
                  height: "20px",
                  width: "20px",
                  color: "#2b3538",
                  margin: "5px",
                }}
                type="folder"
              />
              Projects:
            </Row>
            <Row>
              <Project isMobile={this.props.mobile} projects={projects} />
            </Row>
            <Divider />
            <Row
              className="bodyHeaderFont"
              style={{ height: "40px", textAlign: "center" }}
            >
              <Col span={8}>
                <a href={"/Resume.pdf"} style={{ color: "#2b3538" }}>
                  Resume
                </a>
              </Col>
              <Col span={8}>
                <a href={"https://github.com/robert14k"}>
                  <Icon
                    style={{
                      height: "20px",
                      width: "20px",
                      color: "#2b3538",
                      margin: "5px",
                    }}
                    type="github"
                  />
                </a>
              </Col>
              <Col span={8}>
                <a
                  href={
                    "https://www.linkedin.com/in/robert-kirkpatrick-79282916a/"
                  }
                >
                  <Icon
                    style={{
                      height: "20px",
                      width: "20px",
                      color: "#2b3538",
                      margin: "5px",
                    }}
                    type="linkedin"
                  />
                </a>
              </Col>
            </Row>
          </Card>
          <Row className="footerFont">Created By: Robert Kirkpatrick ©</Row>
        </div>
      </>
    );
  }
}
