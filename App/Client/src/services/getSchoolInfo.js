import API from "../utils/API"

  export default searchColleges = query => {
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

  module.export = {
    searchColleges
  }