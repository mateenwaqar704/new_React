// import React, { useState } from "react";

// export default function Hooks() {
//   const [isShow, setIsShow] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsShow(!isShow)}>Clic Me</button>
//       {isShow?<h1>Mateen Bhatti</h1>:''

//       }

//     </div>
//   );
// }

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
