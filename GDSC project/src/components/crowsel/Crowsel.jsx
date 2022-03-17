import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Card from "../card/Card";
import './crowsel.css'

class Crowsel extends React.Component {
  render() {
    return (
      <OwlCarousel className="owl-theme" loop margin={100} nav>
        <div class="item">
          <Card/>
        </div>
        <div class="item">
          <Card/>
        </div>
        <div class="item">
          <Card/>
        </div>
        <div class="item">
          <Card/>
        </div>
        <div class="item">
            <Card/>
        </div>
      </OwlCarousel>
    );
  }
}
export default Crowsel;
