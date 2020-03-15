import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


class Members extends Component {
  state = {
    members: [],
    constituency: "",
    lastName: "",
    bio: ""
  };

  componentDidMount() {
    this.loadMembers();
  }

  loadMembers = () => {
    API.getMembers()
      .then(res =>
        this.setState({ members: res.data, constituency: "", lastName: "", bio: "" })
      )
      .catch(err => console.log(err));
  };

  deleteMember = id => {
    API.deleteMember(id)
      .then(res => this.loadMembers())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.constituency && this.state.lastName) {
      API.saveMember({
        constituency: this.state.constituency,
        lastName: this.state.lastName,
        bio: this.state.bio
      })
        .then(res => this.loadMembers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3"></Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Members Of The 9th Parliament of Zimbabwe</h1>
            </Jumbotron>
            {this.state.members.length ? (
              <List>
                {this.state.members.map(member => (
                  <ListItem key={member._id}>
                    <Link to={"/members/" + member._id}>
                      <strong>
                        {member.constituency} constituency is represented by {member.lastName}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteMember(member._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Members;
