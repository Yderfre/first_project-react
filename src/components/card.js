import React from "react";
import exerciceImg from "../images/exercise.png";
import images from "../assets/images.js"
class card extends React.Component {
  render() {
    let { title, description, bg, exer, leftColor, rightColor  } = this.props;
   
    return (
      <div className="card mx-auto Fitness-Card" 
      style={{backgroundImage: `url(${images[bg].src}), linear-gradient(to right, ${leftColor},${rightColor})`}}
      >
        <div className="card-body ">
          <div className="row center">
            <div className="col-6">
              <img src={images[exer].src} className="float-right" alt="Exercise" />
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default card;
