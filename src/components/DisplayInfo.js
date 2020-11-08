import React, { Component } from 'react';

class DsiplayInfo extends Component {  
  loadMoreCard =() =>{
    this.props.loadMore(10);
  }   
  render() {   
      debugger; 
    return (
      <div className="info">
      {this.props.user ? 
        <div className ="bindingDiv">       
        <div className="profileImage"><img src={this.props.user.picture.medium}/></div>
        <div className ="info1">
        <div> <b>Name:</b>  {this.props.user.name.title} {this.props.user.name.first} {this.props.user.name.last}</div>
         <div><b>Email:</b> {this.props.user.email}</div>
         <div> <b>Cell:</b> {this.props.user.cell}</div>
        </div>        
      </div>
        : <button className="loadButton" onClick={this.loadMoreCard} >Load More</button> }
        </div>
      
    );
  }  
}

export default DsiplayInfo;