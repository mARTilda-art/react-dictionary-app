import React from "react";
import "./Phonetic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        Listen <FontAwesomeIcon icon={faVolumeHigh}></FontAwesomeIcon>
      </a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
