import React,{Component} from "react";
import API from "../utils/API";
import MemberCard from "../components/Card/MemberCard"
import Searchbar from "../components/Nav/SearchBar";
import { Button, Container, Row, Col } from 'react-materialize';



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
   
       <div>

         <Searchbar>

         </Searchbar>
    
        <Container>
       
         

     
    <Row>

      <Col>
         <MemberCard>

         </MemberCard>

         </Col>
         <Col>
         <MemberCard>

         </MemberCard>

         </Col>
         </Row>
         </Container>

       
             </div>
    );
  }
}

export default Members;
