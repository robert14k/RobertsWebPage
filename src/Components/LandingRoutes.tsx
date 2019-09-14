import React, { Component } from "react";
import "../Style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { LandingPage } from "./LandingPage"
import { HomeLayout } from "./HomeLayout";

export interface ILandingRoutesProps {
  //none
}

export interface ILandingRoutesState {
  //none
}

export class LandingRoutes extends Component<
  ILandingRoutesProps,
  ILandingRoutesState
> {
  static defaultProps = {};
  state: ILandingRoutesState = {
    mobile: false
  };
  //i want to have a array of background immagaes that randomly assign to the background so it wont always be the same immage, thatd be cool...
  //im not actually using this sectin style, i might later clean it up and actually use it
  sectionStyle = {
    flex: "1",
    // backgroundImage: `url(${Background})`,
    backgroundPosition: "center top",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    overflow: "scroll" //this makes it able to scroll the innder component but the backgroudn remains fixed!!!
  };

  // updateDimensions() {
  //   if (window.innerWidth < 900) {
  //     this.setState({
  //       mobile: true
  //     });
  //   } else {
  //     this.setState({
  //       mobile: false
  //     });
  //   }
  // }

  // componentDidMount() {
  //   this.updateDimensions();
  //   window.addEventListener("resize", this.updateDimensions.bind(this));
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updateDimensions.bind(this));
  // }

  mobile: boolean = false;
  render() {
    return (
      <Router>
        <Route path ="/" exact component={LandingPage} />
        <Route path="/Robert" component={HomeLayout} />
        {/* <Route path="/Ted" component={null} />
        // for now this will just direct to mine and then /ted will be his
        <Route path="/Spotify" component={null}/> */}
        {/* <div style={this.sectionStyle}>
          <Link to="/Robert">
            Robert 
          </Link>
          <Link to="/Ted">
            Ted 
          </Link>
          <Link to="/Spotify">
            Spotify Application 
          </Link>
        </div> */}
        {/* <Route path="/Robert" component={HomeLayout} /> */}
        {/* <Route path="/Ted" component={null} />
        <Route path="/Spotify" component={null}/> */}
      </Router>
    );
  }
}
