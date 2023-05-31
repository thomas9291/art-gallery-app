import NavBar from "../component/NavBar/NavBar";
import Container from "../component/Container/Container";
import Footer from "../component/Footer/Footer";
import Cart from "../component/Cart/Cart";
import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data);

  const random = Math.floor(Math.random() * 10 + 0);
  /*  const randomCard = data.map((element, index) =>
    index === random ? { ...element } : null
  ); */
  console.log(data[random].imageSource);
  console.log(typeof data[random].imageSource);

  const imageRatio =
    data[random].dimensions.height / data[random].dimensions.width;

  const imageSize = 450;

  console.log("ImageRatio: ", imageRatio);

  const DisplayImage = styled.img`
    ${data[random].dimensions.height > data[random].dimensions.width
      ? "width: " + 450 + "px;" + "height:" + 450 * imageRatio + "px"
      : "height:" + 450 + "px;" + "height:" + 450 / imageRatio + "px"};
  `;

  return (
    <Container>
      <h1>ART GALLERY</h1>
      <Cart>
        <h3>{data[random].artist}</h3>
        <DisplayImage
          src={data[random].imageSource}
          alt="Picture of the author"
        />
      </Cart>
      <Footer>
        <NavBar isSilver href="./">
          Spotligth
        </NavBar>
        <NavBar href="./">Art piece</NavBar>
        <NavBar href="./">Favorite</NavBar>
      </Footer>
    </Container>
  );
}
