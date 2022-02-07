

import React, { useEffect, useState } from "react";

export default function Hooks() {
  const [drink, setDrink] = useState("pani");
  useEffect(() => {
    setTimeout(() => {
      setDrink("Coffee");
    }, 5000);
  }, []); 

  

  return (
    <div>
      <p>{drink} Is Available</p>
      <button >Need Cofee</button>
    </div>
  );
}
