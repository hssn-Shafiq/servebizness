import React from "react";

export const IntroText = ({subtitle, title,desc}) => {
  return (
    <div className="main-section overflow-hidden">
    <div className="row p-5">
      <div className="col-lg-6">
        <p>{subtitle}</p>
        <h1>{title}</h1>
      </div>
      <div className="col-lg-6">
        <p className="mt-4">
          {desc}
        </p>
      </div>
    </div>
  </div>
  
  );
};
