// import "./App.css";
// import React, { Component } from "react";
// import Person from "./Components/Person";
// import Hooks from "./Components/Hooks";
// import ControlledComponent from "./Components/ControlledComponent";

// import Form from "./Components/Form";
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       persons: [
//         {
//           name: "Mateen Bhatti",
//           age: 27,
//         },
//         {
//           name: "mussawir",
//           age: 28,
//         },
//         {
//           name: "Mubashir",
//           age: 29,
//         },
//       ],
//       isShow: true,
//     };
//   }

//   toggleHandler = () => {
//     this.setState({ isShow: !this.state.isShow }, () => {
//       console.log(this.state.isShow);
//     });
//   };

//   removeHandler = (peraonsIndex) => {
//   const PersonCopy = this.state.persons;
//   console.log(PersonCopy);
//   PersonCopy.splice(peraonsIndex,1);
//   this.setState({Persons: PersonCopy});
//   console.log(PersonCopy);

//   }
//   render() {
//     // let bhatti;

//     // if (this.state.isShow) {
//     //   bhatti = this.state.persons.map((p, index) => {
//     //     return <Person key={index} name={p.name} age={p.age}
//     //     remove = {() => this.removeHandler (index)} />;
//     //   });
//     // } else {
//     //   bhatti = "";
//     // }
//     return (
//       <div className="App">
//         {/* <button onClick={this.toggleHandler}>Toggle</button>
//         {bhatti} */}
//         {/* <Hooks /> */}

//         <ControlledComponent />
//       </div>
//     );
//   }
// }

// export default App;



// // import React, { Component } from 'react';
// // import "./App.css";
// // import Form from './Components/Form';
// // import ControlledComponent from './Components/ControlledComponent';

// // export class App extends Component {
// //   render() {
// //     return <div className="App">

// //       <ControlledComponent />
// //     </div>;
// //   }
// // }

// // export default App;






// import React, { Component } from "react";
// import "./App.css";
// import Register from "./Components/Register";
// import Greet from "./Components/Greet";

// export class App extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        isRegister: false,
//        name:"",
//        email:"",
//        password:"",

//     }
//   }

//   submitChangeHandler = (e) => {
//     e.preventDefault();
//     console.log(this.state)
//     const name = e.target.name.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     this.setState({name,email,password,isRegister: true},()=>{

//       console.log(this.state);
//     })

    


//   }

  
  
//   render() {
//     return <div>

// {

// this.state.isRegister === true ? <Greet name={this.state.name} 
// email={this.state.email} /> 
// :
//  <Register submit = {this.submitChangeHandler} />

// }


//     </div>;
//   }
// }

// export default App;















import React, { Component } from 'react';
import Nav1 from './Components/Nav1';

export class App extends Component {
  render() {
    return <div>
     
     <Nav1 />


    </div>;
  }
}

export default App;

