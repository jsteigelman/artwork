import React from "react";
import "./Work.css";
import { getArtworkData } from './../../Utilities/ArtworkData.js'

export class Artwork extends React.Component {
  render() {

    const artworkData = getArtworkData()

    let current = "";
    if (this.props.title !== null) {
      current = this.props.title;
    }

    return (
      <div className="work-image-row">
      <img src={artworkData[current].image} alt="artwork" />
      <div className="work-artwork-details">
        <p>
          <span>{artworkData[current].title}</span>, {artworkData[current].date}
          <br />
          {artworkData[current].medium}
        </p>
      </div>
    </div>
    )
  }
}

export class Work extends React.Component {
  render() {
    return (
      <div className="work-container">
        <Artwork title="singlescoop" />
        <Artwork title="hologram_winsor_newton" />
        <Artwork title="sunset_june2017" />
        <Artwork title="three_one_dollar_bills" />
        <Artwork title="pink_green" />
        <Artwork title="lightbox_purple" />
        <Artwork title="dusk" />
        <Artwork title="three_one_dollar_bills_secondrow" />
        <Artwork title="sunset_april2018" />
        <Artwork title="lightbox_blue" />
      </div>
    );
  }
}
