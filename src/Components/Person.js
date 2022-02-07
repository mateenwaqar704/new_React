import React, { Component } from 'react';



export class Person extends Component { 
    constructor(props){

        super(props);
        this.props = props;
    }
  render() {
    return <div className="nox" onClick = {this.props.remove} >
     {this.props.index}
        <h1>
        <label >Name</label>:
        <i>{this.props.name}</i>
        {this.props.id}
        <br />
        <label>Age</label> : <i>{this.props.age}</i>

        </h1>
    </div>;
  }
}

export default Person;
