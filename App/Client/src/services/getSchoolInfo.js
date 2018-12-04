import API from "../utils/API"
const APIKEY = "t7Pnruh9yyXyaROBLUdMdAqTdvEAFrVVHDBIc5IK";


export const getSchoolInfo = (name) => {
  const URL = "https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=" + APIKEY + "&school.name&school.name=" + name;
  return fetch(URL)
    .then((res) => res.json());}

  export const getCollegeInfo = query => {
    API.search(query)
      .then(res => {
        var dataObj = {
          id: res.data.results[0].id,
          school: res.data.results[0].school,
          latest: res.data.results[0].latest,
        }
        const schoolData = [...this.state.data, dataObj]
        this.setState({
          data: schoolData
        })
        console.log(schoolData)
      })
      .catch(err => console.log(err));
  };