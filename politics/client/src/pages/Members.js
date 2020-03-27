import React,{Component} from "react";
import API from "../utils/API";
import MemberCard from "../components/Card/MemberCard"
import Searchbar from "../components/Nav/SearchBar";
import {  Container, Row, Col } from 'react-materialize';



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
    );
  }
}

export default Members;
