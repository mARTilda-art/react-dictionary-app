import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <span className="col-4" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={photo.src.landscape}
                    alt="photo_landscape"
                    className="img-fluid"
                    title="photo_landscape"
                  />
                </a>
              </span>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
