import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <strong>Definition:</strong> <br />
      <br />
      <div className="definition">
        {props.meaning.definitions[0].definition}
      </div>
      <br />
      <strong>Example:</strong> <br />
      <br />
      <div className="example">{props.meaning.definitions[0].example}</div>
      <br />
      <strong>Synonyms:</strong>
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
