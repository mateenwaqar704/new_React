import React from 'react';

export default function Greet(props) {
  return <div className="container card p-3 mt-2 register-container">
      <h1>Thank You For joining us</h1>
      <h5>{props.name}</h5>
      <h5>{props.email}</h5>

  </div>;
}
