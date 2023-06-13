import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useImmerLocalStorageState from "../component/useImmerLocalStorageState/useImmerLocalStorageState";
import useSWR from "swr";
/* import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid"; */

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading, mutate } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;
  if (artPiecesInfo.length === 0) {
    setArtPiecesInfo(data);
  }
  console.log("data", data);

  const favoriteHandler = (slug) => {
    setArtPiecesInfo(
      artPiecesInfo.map((element) =>
        element.slug === slug
          ? {
              ...element,
              isFavorite: !element.isFavorite,
            }
          : element
      )
    );
  };
  console.log("artPiecesInfo:", artPiecesInfo);

  const filteredFavorite = artPiecesInfo.filter(
    (element) => element.isFavorite === true
  );

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher, refreshInterval: 1000 }}>
        <Component
          /* onAddEntry={handleAddEntry} */
          filteredFavorite={filteredFavorite}
          mutate={mutate}
          onToggle={favoriteHandler}
          artPiecesInfo={artPiecesInfo}
          setArtPiecesInfo={setArtPiecesInfo}
          {...pageProps}
        />
      </SWRConfig>
    </>
  );
}
