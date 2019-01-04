import React from "react";
import { connect } from "react-redux";

const SongDetail = props => {
  return (
    <div>
      <h3>{props.selectedSong != null ? "Details For:" : ""}</h3>
      <p>
        {props.selectedSong != null ? `Title: ${props.selectedSong.title}` : ""}
        <br />{" "}
        {props.selectedSong != null
          ? `Duration: ${props.selectedSong.duration}`
          : ""}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
