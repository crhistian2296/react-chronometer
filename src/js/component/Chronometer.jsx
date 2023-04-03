import React from "react";
import Card from "./Card.jsx";

const Chronometer = ({ initialValue }) => {
  return (
    <div className="bg-black text-light">
      <div className="container d-flex justify-content-center">
        <div className="row text-center w-50 fs-1">
            <div className="col bg-dark p-0 mx-2 my-3">
                <Card numValue={<i className="fa fa-solid fa-clock"></i>} />
            </div>
            <div className="col bg-dark p-0 mx-2 my-3">
                <Card numValue={initialValue[0]} />
            </div>
            <div className="col bg-dark p-0 mx-2 my-3">
                <Card numValue={initialValue[1]} />
            </div>
            <div className="col bg-dark p-0 mx-2 my-3">
                <Card numValue={initialValue[2]} />
            </div>
            <div className="col bg-dark p-0 mx-2 my-3">
                <Card numValue={initialValue[3]} />
            </div>
            <div className="col bg-dark p-0 mx-2 my-3">
                <Card numValue={initialValue[4]} />
            </div>
            <div className="col bg-dark p-0 mx-2 my-3">
                <Card numValue={initialValue[5]} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Chronometer;
