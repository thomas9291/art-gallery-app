import NavBar from "../component/NavBar/NavBar";
import Container from "../component/Container/Container";
import Footer from "../component/Footer/Footer";
import Cart from "../component/Cart/Cart";
import useSWR from "swr";
import Image from "next/image";
import React from "react";

import classes from "./index.module.css";
import useLocalStorageState from "use-local-storage-state";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  // const [entries, setEntries] = useLocalStorageState("art gallery", {
  //   defaultValue: data,
  // });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const random = Math.floor(Math.random() * 10 + 0);

  return (
    <Container>
      <h1 style={{ color: "white" }}>ART GALLERY</h1>
      <Cart>
        <h2>Artist name: {data[random].artist}</h2>
        <h3>Picture name: {data[random].name}</h3>
        <Image
          className={classes.image}
          src={data[random].imageSource}
          alt="pictur autor"
          width={550}
          height={350}
        />
        <p>{data[random].year}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
        >
          <path d="m480-121-41-37q-105.768-97.121-174.884-167.561Q195-396 154-451.5T96.5-552Q80-597 80-643q0-90.155 60.5-150.577Q201-854 290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.423Q880-733.155 880-643q0 46-16.5 91T806-451.5Q765-396 695.884-325.561 626.768-255.121 521-158l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712-426 750.5-476t54-89.135q15.5-39.136 15.5-77.72Q820-709 778-751.5T670.225-794q-51.524 0-95.375 31.5Q531-731 504-674h-49q-26-56-69.85-88-43.851-32-95.375-32Q224-794 182-751.5t-42 108.816Q140-604 155.5-564.5t54 90Q248-424 314-358t166 158Zm0-297Z" />
        </svg>
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
