import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
 

  body {
   
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
  
    
     
  }
`;
