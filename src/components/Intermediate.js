import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
class Intermediate extends Component {
  render() {
    const mapIntermediate = this.props.mapObjectIntermediate;
    const onPick = this.props.pickIntermediate;
    const childCheckButton = this.props.childCheckButton;

    return (
      <div className="card-deck">
        {mapIntermediate.map((person) => (
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
              <button
                className="mt-auto btn btn-primary btn-lg btn-block"
                disabled={childCheckButton(person.id) && true}
                onClick={() => onPick(person.id)}
                type="button"
              >
                {childCheckButton(person.id) ? "Stretch Added" : "Add"}
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Intermediate;
