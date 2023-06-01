import React from "react";
import { useRouter } from "next/router";

import Container from "../../component/Container/Container";
import NavBar from "../../component/NavBar/NavBar";
import Image from "next/image";
import Footer from "../../component/Footer/Footer";
import Cart from "../../component/Cart/Cart";

export default function DetailPage({ artPiecesInfo }) {
  const router = useRouter();
  const { slug } = router.query;

  const arPieceIndex = artPiecesInfo.findIndex(
    (element) => element.slug === slug
  );
  const objectArt = artPiecesInfo[arPieceIndex];
  console.log(objectArt);
  const { artist, name, imageSource, year } = objectArt;

  return (
    <Container>
      <h1 style={{ color: "white" }}>ART GALLERY</h1>

      <Cart>
        <h2>Artist name: {artist}</h2>
        <h3>Picture name: {name}</h3>
        <Image
          className="image"
          src={imageSource}
          alt="pictur autor"
          width={550}
          height={350}
        />
        <p>{year}</p>
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
