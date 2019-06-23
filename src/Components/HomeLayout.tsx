import React, { Component } from "react";
//import { Box, Grid  } from 'grommet';
import "../Style.css";
import Background from "../images/mountain-names.jpg";
//import Lake from '../images/mountainLake.jpg';
import { Row, Col } from "antd";
import InfoContainer from "./InfoContainer";
//import { Grid, Row, Col } from 'react-flexbox-grid';

//  const { Row } = Grid;
export interface IHomeLayoutProps {
  //none
}

export interface IHomeLayoutState {
  mobile: boolean;
}

export class HomeLayout extends Component<IHomeLayoutProps, IHomeLayoutState> {
  static defaultProps = {};
  state: IHomeLayoutState = {
    mobile: false
  };
  //i want to have a array of background immagaes that randomly assign to the background so it wont always be the same immage, thatd be cool...
  //im not actually using this sectin style, i might later clean it up and actually use it
  sectionStyle = {
    flex: "1",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center top",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    overflow: "scroll" //this makes it able to scroll the innder component but the backgroudn remains fixed!!!
  };

  updateDimensions() {
    if (window.innerWidth < 700) {
      this.setState({
        mobile: true
      });
    } else {
      this.setState({
        mobile: false
      });
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
  // picture=`url(${Headshot})`
  //the height style doesnt work and the classname main header also doesnt work all that well
  mobile: boolean = false;
  render() {
    return (
      <div style={this.sectionStyle}>
        <Row style={{ height: "10%" }} />
        <Row className="welcomeFont" style={{ height: "80px" }}>
          Welcome
        </Row>
        <Row className="headerFont">My name is Robert Kirkpatrick</Row>
        <Row style={{ height: "10px" }} />
        <Row className="subHeaderFont">Software Engineering Student</Row>
        <Row style={{ height: "50px" }} />
        <Row style={{ width: "100%" }}>
          {!this.state.mobile && (
            <>
              <Col span={4}></Col>
              <Col span={16}>
                {/* this is where i want to render my info page, maybe make that a component */}
                <InfoContainer />
              </Col>
              <Col span={4}></Col>
            </>
          )}
          {this.state.mobile && <InfoContainer />}
        </Row>
      </div>
    );
  }
}
