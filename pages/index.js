import NavBar from "../component/NavBar/NavBar";
import Container from "../component/Container/Container";
import Footer from "../component/Footer/Footer";
import Cart from "../component/Cart/Cart";
import useSWR from "swr";
import Image from "next/image";

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

  return (
    <Container>
      <h1>ART GALLERY</h1>
      <Cart>
        <Image
          src="https://example-apis.vercel.app/assets/art/body-of-water.jpg"
          width={450}
          height={300}
          alt="Picture of the author"
        />
        <h2>{data[random].artist}</h2>
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
