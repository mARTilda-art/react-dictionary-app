import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>
          <strong>Definition: </strong>
          {props.meaning.definitions[0].definition}
          <br />
          <strong>Example: </strong>
          <em>{props.meaning.definitions[0].example}</em>
          <br />
          <Synonyms synonyms={props.meaning.definitions[0].synonyms} />
        </p>
      </div>
    </div>
  );
}
