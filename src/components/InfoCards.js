import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';
import DisplayInfo from "./DisplayInfo";
import axios from 'axios';

class InfoCards extends Component {   
  state ={
    result: ""
  }
    componentDidMount(){
        {this.loadCards(5)};
    }
    loadCards =(e) =>{
      this.props.getUsers(e);      
    }
  render() {
    const {Users} = this.props;
    return (
      <div className="cards">
        <div className="header"><h2>User Details</h2> </div>
      
        {Users.length >0 ? Users.map ((user, id) => {
          return(
          <DisplayInfo user= {user}/> 
          )
        }) :<div className="header">Loading...</div>}
    
      {Users.length > 0 && <DisplayInfo button loadMore={this.loadCards} />}
      </div>
   
    );
  }  
}
const mapStateToProps = (state) => {
    return {
        Users: state.userInfo.userInfo
    };
}
export default connect(mapStateToProps, actions)(InfoCards);