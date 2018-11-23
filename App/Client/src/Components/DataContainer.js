import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import CollegeDetail from "./CollegeDetail";
import API from "../utils/API";
import Navbar from "./Navbar";

class DataContainer extends Component {
  state = {
    result: [],
    search: ""
  };

  componentDidMount() {
    this.searchColleges("");
  }

  searchColleges = query => {
    API.search(query)
      .then(res => {
        console.log(res.data.results[0].school);
        console.log(res.data.results[0].latest);
        this.setState({ result: res.data.results[0].school })
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
      <Navbar>
        <Container>
          <Row>
            <Col size="md-8">
              <Card
                heading="Search for a College to Begin">
                <CollegeDetail
                  name={this.state.result.name}
                  city={this.state.result.city}
                  zip={this.state.result.zip}
                />
              </Card>
            </Col>
            <Col size="md-4">
              <Card heading="Search">
                <SearchForm
                  value={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </Navbar>
    );
  }
}

export default DataContainer;
