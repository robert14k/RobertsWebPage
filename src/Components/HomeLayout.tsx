import React, { Component } from "react";
//import { Box, Grid  } from 'grommet';
import "../Style.css";
import Background from "../images/mountain-names.jpg";
//import Lake from '../images/mountainLake.jpg';
import { Row, Col, Anchor } from "antd";
import InfoContainer from "./InfoContainer";
import animateScrollTo from 'animated-scroll-to';
//import { Grid, Row, Col } from 'react-flexbox-grid';

//  const { Row } = Grid;
const { Link } = Anchor;

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
    if (window.innerWidth < 900) {
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

  handleClick = (e: any, link: any) => {
    e.preventDefault();
    animateScrollTo(link.href);
    console.log(link);
  };

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
        {/* <Anchor affix={false} onClick={this.handleClick}>
          <Link href="#about" title="About me" />
        </Anchor> */}
        <Row style={{ height: "50px" }} />
        <Row style={{ width: "100%" }}>
          {!this.state.mobile && (
            <>
              <Col span={4} />
              <Col span={16}>
                {/* this is where i want to render my info page, maybe make that a component */}
                <h3 ref="about">
                  <InfoContainer mobile={this.state.mobile}/>
                </h3>
              </Col>
              <Col span={4} />
            </>
          )}
          {this.state.mobile && <InfoContainer mobile={this.state.mobile} />}
        </Row>
      </div>
    );
  }
}
