import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
class Custom extends Component {
  render() {
    //this const declaration connects this Beginner class to the App class. It is the way to pass the//
    //apiDataBeginner state to call the map function on it from within this component//
    const mapCustom = this.props.mapObjectCustom;
    return (
      <div className="card-deck">
        {mapCustom.map((person) => (
          <div className="card text-center">
            <img
              className="card-img-top"
              alt="yogapic"
              src={person.imgURL}
              key={person.id}
            />
            <div class="card-body d-flex flex-column">
              <h3 className="card-title">{person.body_part}</h3>
              <h5 className="car-title">{person.position}</h5>
              <p className="card-text">{person.description}</p>

              <ReactAudioPlayer src={person.audio} autoplay controls />
            </div>
          </div>
        ))}
        {mapCustom.length <= 0 && (
          <div className="card">
            <img src="https://i.imgur.com/SHoxUWx.gif" alt="Empty"></img>
            <p className="card-text">
              There's nothing here, add some stretches.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Custom;
