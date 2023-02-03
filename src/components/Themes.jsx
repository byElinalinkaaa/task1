
 import { Button, InputGroup } from "react";
 import React, { useMemo } from "react";
 import Toggle from "./Toggle";

 function Themes() {
   const [darkMode, setDarkMode] = React.useState(true);

   const nextTheme = useMemo(
     (color) => (darkMode ? color.light : color.dark),
     [darkMode]
   );

   return (
     <div className="App">
       <header className="App-header">
         <h1 className="text-warning">Dark/Light mode</h1>
         <InputGroup>
          
           {({ changeTheme }) => (
             <Button
               color="link"
               onClick={() => {
                 setDarkMode(!darkMode);
                 changeTheme(nextTheme);
               }}
             >
               <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
               <span className="d-lg-none d-md-block">Switch mode</span>
             </Button>
           )}
           <Toggle />
        
         </InputGroup>{" "}
       </header>
     </div>
   );
 }

 export default Themes;