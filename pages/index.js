import NavBar from "../component/NavBar/NavBar";
import Container from "../component/Container/Container";
import Footer from "../component/Footer/Footer";
import Cart from "../component/Cart/Cart";

import Image from "next/image";
import React from "react";

export default function HomePage({ data }) {
  const random = Math.floor(Math.random() * 10 + 0);

  return (
    <Container>
      <h1 style={{ color: "white" }}>ART GALLERY</h1>
      <Cart>
        <h2>Artist name: {data[random].artist}</h2>
        <h3>Picture name: {data[random].name}</h3>
        <Image
          className="image"
          src={data[random].imageSource}
          alt="pictur autor"
          width={550}
          height={350}
        />
        <p>{data[random].year}</p>
      </Cart>
      <Footer>
        <NavBar isSilver href="/">
          Spotligth
        </NavBar>
        <NavBar href="./artPiece">Art piece</NavBar>
        <NavBar href="./">Favorite</NavBar>
      </Footer>
    </Container>
  );
}
