import React from "react";
import { getSchoolInfo, getCollegeInfo } from "../services/getSchoolInfo";


const ExtraDetail = ({ match: { params: { name } } }) => {

  const a = getSchoolInfo('harvard');
  //if a is empty { no data found}
  //const a = getCollegeInfo('harvard')
  console.log(a);


  return (
    <h1>{name}</h1>
  )
};

export default ExtraDetail;
