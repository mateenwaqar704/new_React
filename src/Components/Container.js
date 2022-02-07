import React, { Component } from "react";
import Details from "./Details";
import Question from "./Question";



class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
        questions: {
          q1: null,
          q2: null,
          q3: null,
          other:null,
        },
      isSubmitted: false,
    };
  }

  detailsSubmitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    this.setState({ name, email }, () => {
      console.log(this.state);
    });
  };

  questionSubmitHandler = (e) => {
      e.preventDefault();
       const questions = {};
       questions.q1 = e.target.q1.value;
       questions.q2 = e.target.q2.value;
       questions.q3 = e.target.q3.value;
       questions.other = e.target.other.value;
      this.setState({questions},()=>{

        console.log(this.state);
      });
  };
  render() {
    return (
      <>
        <div className="container-fluid pt-3">
          <div className="container card mt-2 ">
            <h1 className="text-center text-primary">Velox Sol</h1>
          </div>
        </div>

        {this.state.name === null && this.state.email === null ? (
          <Details submit={this.detailsSubmitHandler} />
        ) : (
          <Question submit={this.questionSubmitHandler} />
        )}
      </>
    );
  }
}

export default Container;
