import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}


body {
  
  height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

  
   
}
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
.favoriteBtn {
  appearance: none;
  background: none;
  border: none;
  padding: 0;
  border-radius: 999px;
  aspect-ratio: 1;
  transition: background-color 0.2s ease-in-out;
  background-color: transparent;
  margin: -6px;
  padding: 6px;
}

`;
