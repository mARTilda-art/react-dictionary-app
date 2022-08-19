import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>
          {props.meaning.definitions[0].definition}
          <br />
          <em>{props.meaning.definitions[0].example}</em>
        </p>
      </div>
    </div>
  );
}
