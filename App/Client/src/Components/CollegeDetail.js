import React from "react";

const CollegeDetail = props => (
  <div className="text-center">
    <h3>Name: {props.name}</h3>
    <h3>City:{props.city}</h3>
    <h3>Zip:{props.zip}</h3>
  </div>
);

export default CollegeDetail;
