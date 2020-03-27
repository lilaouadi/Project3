import React, { Component } from "react";
import { Link } from "react-router-dom";
import {  Container, Row, Col,Button ,Card} from 'react-materialize';
import MemberCard from "../components/Card/MemberCard"
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

      <div>
    
   
        {/* tittle container */}
            <Container>

             <Card className="black white-text center">
              <h3 >
                {this.state.member.constituency} constituency is represented by {this.state.member.lastName}
              </h3>
              </Card>
            </Container>
        
    {/* Row for everything */}
        <Row>

          {/* Col for member info */}
            <Col className="l6">
          <Card className="black white-text">
          <h4>Name</h4>
          <h4>Contact Info</h4>
          <h4>Record</h4>
          </Card>
            </Col>

            {/* col for member Bio */}
        <Col className="l6">
           <Card className="black white-text">
              <h1>Bio</h1>
              <h5> 
                dnasldldmasd
                dsaklmaskdmaslkd
                sdmakdmasd
               
                {this.state.member.bio}
              </h5>
              </Card>
            </Col>
            <Col className="l6">
              </Col>

{/* col for updating the bio */}
            <Col className="l6">

              <Card className="black white-text">
            <article>
              <h1 className="white-text">Would you like to update bio?</h1>
            </article>
            <form>
              <TextArea className="white-text"
                value={this.state.bio}
                onChange={this.handleInputChange}
                name="bio"
                placeholder="Bio (Optional)"
              />
              <Button
                disabled={!(this.state.lastName && this.state.constituency)}
                onClick={this.handleFormSubmit}
              >
                Submit Member Bio
              </Button>
            </form>
            </Card>
          </Col>
        </Row>
       
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Representatives</Link>
          </Col>
        </Row>
   
      </div>
    );
  }
}

export default Detail;
