import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import ExtraDetail from "./ExtraDetail";

class InfoPage extends Component {

  state = {
    data: [],
    search: ""
  };

  componentDidMount() {
    this.searchColleges("");
  }

  searchColleges = query => {
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

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchColleges(this.state.search);
  };

  render() {
    return (
      <ExtraDetail>
      </ExtraDetail>
    );
  }
}

export default InfoPage;
