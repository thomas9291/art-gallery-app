import NavBar from "../component/NavBar/NavBar";
import Container from "../component/container/container";
import Footer from "../component/Footer/Footer";
import useSWR from "swr";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data);
  return (
    <Container>
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
