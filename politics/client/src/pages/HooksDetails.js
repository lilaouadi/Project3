import React, { useState, useEffect } from "react";
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

function HooksDetails() {
  const [Member, SetMember] = useState({});

  const loadMember = () => {
    API.getMember(this.props.match.params.id)
      .then((res) => {
        SetMember(res.data);
        console.log("Member", Member);
      })
      .catch((err) => console.log(err));
  };

  return <div></div>;
}

export default HooksDetails;
