import React from 'react';

export default function Register(props) {

    let btnStyle = {
        
    }



  return <div className="container card p-3 mt-2 register-container">
  <h1>Registration Form</h1>


  <form onSubmit={props.submit}>
   <div className="form-group">
       <label htmlFor="name">Name: </label>
       <input type="text" name="name"   className="form-control" />
   </div>
   <div className="form-group">
       <label htmlFor="email">Email: </label>
       <input type="email" name="email" className="form-control" />
   </div>
   <div className="form-group">
       <label htmlFor="password">Password: </label>
       <input type="password" name="password" className="form-control" />
   </div>
   <button type="submit" className="btn btn-primary">Register</button>
   <button type="button" style={btnStyle}>Show Password</button>

  </form>
  </div>;
}
