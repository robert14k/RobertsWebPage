import React, { Component } from "react";
import Headshot from "../images/Fall_2018_headshot.jpg";
import { Row, Card, Avatar, Icon, Col, Divider } from "antd";
// import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "../Style.css";
import webPage from "../images/webPage.png";
import project156 from "../images/project156.png";
import heyday from "../images/Heyday.png";
import pitivi from "../images/pitivi.png";
import herdhand from "../images/Herdhand.png";
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
  isLeft: true,
});
let project2 = new ProjectEntity({
  picture: project156,
  title: "Invoice Tracker",
  description:
    "This is a backend application written in Java and SQL to track invoices for a movie theater.",
  link: "https://github.com/robert14k/156Project5.1",
  isLeft: false,
});
let project3 = new ProjectEntity({
  picture: heyday,
  title: "Heyday",
  description:
    "Heyday was a student lead startup out of Raikes Design Studio program that was geared as a financial management app for college students.",
  link: "https://heyday.money",
  isLeft: true,
});
let project4 = new ProjectEntity({
  picture: pitivi,
  title: "Pitivi",
  description:
    "Pitivi is an open source video editor for Linux. My software class is contributing to Pitivi while learning software development techniques through sprint planning, status meetings, and handoff presentations.",
  link: "https://gitlab.gnome.org/bracciata/pitivi/-/tree/solid_color_clips",
  isLeft: false,
});
let project5 = new ProjectEntity({
  picture: herdhand,
  title: "Herdhand",
  description:
    "Herdhand is a cross-platform app, which I co-founded, that deals with herd management for cow-calf ranch operations. It is written using cutting edge technologies such as Flutter and Firebase.",
  link: "https://app.herdhand.com",
  isLeft: false,
});
projects[0] = project5;
projects[1] = project3;
projects[3] = project1;
projects[4] = project2;
projects[2] = project4;

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
              business and mathematics. I am currently a software development
              intern at Nelnet in Lincoln. I work with a talented team of
              full-time engineers on an internal service for student loan
              consolidation. Through the work at Nelnet, I am able to learn the
              value of creating efficient solutions for large data sets. Over
              the course of the three summers prior, I interned at Hudl,
              Buildertrend, and Northrop Grumman. This school year I am excited
              to be the development manager of the Nebraska Department of
              Transportation’s project for the Raikes School Design Studio
              Program.
              <p />
              In my free time I am currently working on building a cattle
              management software called Herdhand. Herdhand is being created
              using the latest technologies to have a simplified interface and
              strong offline capabilities. Aside from side projects, I enjoy
              spending time outdoors with my wife Maggie and our dog Mosley.
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
