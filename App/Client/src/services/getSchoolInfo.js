import axios from "axios";
const APIKEY = "t7Pnruh9yyXyaROBLUdMdAqTdvEAFrVVHDBIc5IK";

export const getSchoolInfo = (name) => {
  const URL = "https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=" + APIKEY + "&school.name&school.name=" + name;
  return fetch(URL)
    .then((res) => res.json());}