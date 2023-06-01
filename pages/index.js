import NavBar from "../component/NavBar/NavBar";
import Container from "../component/Container/Container";
import Footer from "../component/Footer/Footer";
import Cart from "../component/Cart/Cart";

import Image from "next/image";
import React from "react";

export default function HomePage({
  artPiecesInfo,
  mutate,
  data,
  updateArtPiecesInfo,
}) {
  const random = Math.floor(Math.random() * 10 + 0);
  updateArtPiecesInfo(data);
  return (
    <Container>
      <h1 style={{ color: "white" }}>ART GALLERY</h1>
      <Cart>
        <h2>Artist name: {artPiecesInfo[random].artist}</h2>
        <h3>Picture name: {artPiecesInfo[random].name}</h3>
        <Image
          className="image"
          src={artPiecesInfo[random].imageSource}
          alt="pictur autor"
          width={550}
          height={350}
        />
        <p>{artPiecesInfo[random].year}</p>
      </Cart>
      <button type="button" onClick={() => mutate()}>
        Revalidate
      </button>
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
