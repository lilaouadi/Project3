import React,{Component} from "react";
import API from "../utils/API";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Card from '../components/Card';
=======
import MemberCard from "../components/Card/MemberCard"
import Searchbar from "../components/Nav/SearchBar";
import {  Container, Row, Col } from 'react-materialize';

>>>>>>> 6eecb601d76eecc7ae3565c46c74e48ac18feb65


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
<<<<<<< HEAD
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
              <div>
                  <h3>No Results to Display</h3>
                <Card />
              </div>
                
              )}
          </Col>
        </Row>
      </Container>
=======
   
       <div>

         <Searchbar>

         </Searchbar>


        
          {this.state.members.length ? (
            <Row>
              {this.state.members.map(member => (
            <MemberCard key={member._id}
            lastName={member.lastName}
            constituency={member.constituency}
            bio={member.bio}
           / >
  
              ))}
            </Row>
          ) : (
           <Row>
              <h3>No Results to Display</h3>
              </Row>
          )}
   


     
         

     


       
             </div>
>>>>>>> 6eecb601d76eecc7ae3565c46c74e48ac18feb65
    );
  }
}

export default Members;
