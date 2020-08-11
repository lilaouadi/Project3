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

  const member = members.find((member) => member._id === id);

  const id = props.match.params.id;
  console.log("id", id);

  console.log("member", member);

  useEffect(() => {
    if (member === undefined) {
      findMember(id);
    }
  }, []);

  const findMember = (id) => {
    members.map((x, index) => {
      if (x._id === id) {
        console.log("Found it", x);
      }
    });
  };

  return (
    <div>
      {/* tittle container */}
      <Container>
        <Card className="black white-text center">
          {console.log("members", members)}
        </Card>
      </Container>
    </div>
  );
}

export default HooksDetails;
