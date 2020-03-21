import React, { Component } from "react";
import { Link } from "react-router-dom";
import {  Container, Row, Col } from 'react-materialize';

import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";

class Detail extends Component {
  state = {
    member: {}
  };
  // When this component mounts, grab the member with the _id of this.props.match.params.id
  // e.g. localhost:3000/members/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getMember(this.props.match.params.id)
      .then(res => this.setState({ member: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Container>
              <h1>
                {this.state.member.constituency} constituency is represented by {this.state.member.lastName}
              </h1>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Bio</h1>
              <p>
                {this.state.member.bio}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <article>
              <h1>Would you like to update bio?</h1>
            </article>
            <form>
              <TextArea
                value={this.state.bio}
                onChange={this.handleInputChange}
                name="bio"
                placeholder="Bio (Optional)"
              />
              <FormBtn
                disabled={!(this.state.lastName && this.state.constituency)}
                onClick={this.handleFormSubmit}
              >
                Submit Member Bio
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Representatives</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
