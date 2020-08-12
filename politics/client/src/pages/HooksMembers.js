import React, { useContext, useEffect, useState } from "react";

import API from "../utils/API";

import { MemberContext } from "../context/MembersContext";
import MemberCard from "../components/Card/MemberCard"
import Searchbar from "../components/Nav/SearchBar";
import {  Container, Row, Col } from 'react-materialize';
import { Link } from "react-router-dom";
import MPimage from "../img/MPimage.png"


function HooksMembers() {
  const { members, setmembers } = useContext(MemberContext);

  const loadMembers = () => {
    API.getMembers()
      .then((res) => {
        setmembers(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (members.length === 0) {
      loadMembers();
    }
  }, []);

  return (
    <div>
      <Searchbar></Searchbar>
      {console.log("members", members)}

      {members.length ? (
        <Row>
          {members.map((member) => (
            <MemberCard
              key={member._id}
              image={MPimage}
              lastName={member.lastName}
              constituency={member.constituency}
              bio={member.bio}
              search={<Link to={"/members/" + member._id}>more details</Link>}
            />
          ))}
        </Row>
      ) : (
        <Row>
          <h3 className="center">loading...</h3>
        </Row>
      )}
    </div>
  );
}

export default HooksMembers;
