import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Nav/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HooksDetails from "./pages/HooksDetails";
import HooksMembers from "./pages/HooksMembers";
import { MemberContext } from "./context/MembersContext";

function App() {
  const [members, setmembers] = useState([]);

  return (
    <MemberContext.Provider value={{ members, setmembers }}>
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route exact path="/" component={HooksMembers} />
            <Route exact path="/members" component={HooksMembers} />
            <Route exact path="/members/:id" component={HooksDetails} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </MemberContext.Provider>
  );
}

export default App;
