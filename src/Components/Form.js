import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      country: "",
    };
  }

  // nameChangeHandler = (e) => {

  //     console.log("Name" , e.target.value);

  // }

  // nameChangeHandler = (e) => {

  //     console.log("Select" , e.target.value);

  // }


  submitChangeHandler = (e) => {
      e.preventDefault();

  console.log(this.state);
  const name = e.target.name.value;
  const country = e.target.country.value;
  this.setState({name,country},()=>{

    console.log(this.state);
  });

  }

  
  render() {
    return (
      <div>
        <form onSubmit={this.submitChangeHandler}>
          <div>
            <label htmlFor="">Name: </label>
            <input type="text" name="name" />
          </div>
          <div>
            <label htmlFor="">Country: </label>
            <select name="country">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
