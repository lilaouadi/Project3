import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Icon,
  CardTitle,
} from "react-materialize";
import MemberCard from "../components/Card/MemberCard";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import { MemberContext } from "../context/MembersContext";

function HooksDetails(props) {
  const { members } = useContext(MemberContext);
  //variable for member
  const member = members.find((member) => member._id === id);

  const [match, setmatch] = useState({});

  const [fix, setfix] = useState(false);

  const [bio, setbio] = useState("");
  const id = props.match.params.id;
  console.log("id", id);

  console.log("member", member);

  useEffect(() => {
    if (fix === false) {
      findMember(id);
      setfix(true);
    }
  });
  //takes in the id and maps throught the array of members
  //until it finds one that matches
  //updates state to the member we are looking for

  const findMember = (id) => {
    members.map((x) => {
      if (x._id === id) {
        console.log("x.bio", x.bio);

        setbio(x.bio);
        setmatch(x);

        console.log("bio", bio);
        console.log("match", match);
      }
    });
  };

  return (
    <div>
      {/* tittle container */}
      <Container>
        <Card className="black white-text center">
          <h3>
            {match.constituency} constituency is represented by {match.lastName}
          </h3>
        </Card>
      </Container>

      {/* Row for everything */}

      <Row>
        {/* Col for member info */}

        <Col m={6} s={12}>
          <Card
            className="black white-text"
            header={<CardTitle image={match.imageHref}></CardTitle>}
          ></Card>
        </Col>

        {/* col for member Bio */}
        <Col className="l6">
          <Card className="black white-text">
            <h1>Bio</h1>
            <h5>{bio.toString().trim().split(":")}</h5>
          </Card>
        </Col>

        {/* col for updating the bio */}
        <Col className="l6">
          <Card className="black white-text">
            <article>
              <h1 className="white-text">Would you like to update bio?</h1>
            </article>
          </Card>
        </Col>
      </Row>

      {/* row */}
      <Row>
        <Col size="md-2">
          <Link to="/">← Back to Representatives</Link>
        </Col>
      </Row>
    </div>
  );
}

export default HooksDetails;
