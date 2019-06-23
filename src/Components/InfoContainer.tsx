import React, { Component } from "react";
import Headshot from "../images/Fall_2018_headshot.jpg";
import { Row, Card, Avatar, Icon, Col } from "antd";
import "../Style.css";
export interface IInfoContainerProps {
  //none
}

export interface IInfoContainerState {
  //none
}

export default class AddComment extends Component<
  IInfoContainerProps,
  IInfoContainerState
> {
  static defaultProps = {};

  state: IInfoContainerState = {};

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
              <Icon style={{height: "20px", width: "20px", color:"#2b3538", margin: "5px"}} type="user" />
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
                <a href="..\files\Resume.pdf">
                  hello
                </a>
              </Col>
              <Col span={12}>
              </Col>
            </Row> */}
            
          </Card>
        </div>
      </>
    );
  }
}
