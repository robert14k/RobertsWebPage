import React, { Component } from "react";
import "../Style.css";
import { Link } from "react-router-dom";

export interface ILandingPageProps {
  //none
}

export interface ILandingPageState {
  //none
}

export class LandingPage extends Component<
  ILandingPageProps,
  ILandingPageState
> {
  static defaultProps = {};
  state: ILandingPageState = {
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

  mobile: boolean = false;
  render() {
    return (
        <div style={this.sectionStyle}>
          <Link to="/Robert">
            Robert 
          </Link>
          <Link to="/Ted">
            Ted 
          </Link>
          <Link to="/Spotify">
            Spotify Application 
          </Link>
        </div>
    );
  }
}
