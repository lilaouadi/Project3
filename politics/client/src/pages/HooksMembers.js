import React, { useContext, useEffect, useState } from "react";

import API from "../utils/API";

import { MemberContext } from "../context/MembersContext";
import Searchbar from "../components/Nav/SearchBar";

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
    </div>
  );
}

export default HooksMembers;
