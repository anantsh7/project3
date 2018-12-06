import CollegeDetail from "./CollegeDetail";
import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import API from "../utils/API";
import { searchColleges }  from "../services/getSchoolInfo"

class ExtraDetail extends Component {
  state = {
    data: []
  }


  componentDidMount() {
    this.searchColleges(this.props.match.params.schoolname)
  }


  render() {
    console.log(this.props);
    return (
      <Container>
        <Row>
          {this.state.data.length ? (this.state.data.map(res => (
            <Col size="md-4">
              <Card
                heading="">
                <CollegeDetail
                  name={res.school.name}
                  city={res.school.city}
                  state={res.school.state}
                  all={res.latest.student.enrollment.all}
                  cost={res.latest.cost.attendance.academic_year}
                />
              </Card>
            </Col>
          ))) : ""}
        </Row>
      </Container>
    )
  }

};

export default ExtraDetail;
