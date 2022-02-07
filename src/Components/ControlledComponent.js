import React, { Component } from 'react';

export class ControlledComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          name:"Mateen Bhatti",
         
      };
    }
   changeHandler = (e) => {
    
    const name = e.target.value;
    this.setState({name},()=> {

        console.log(this.state);
    })
     


    }
    
  render() {
    return <div>
        <form>
            <input type="text" name="name" value={this.state.name} 
            onChange={this.changeHandler}/>
        </form>





    </div>;
  }
}

export default ControlledComponent;
