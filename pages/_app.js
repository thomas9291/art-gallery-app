import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
/* import useImmerLocalStorageState from "../component/useImmerLocalStorageState/useImmerLocalStorageState"; */
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading, mutate } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const [artPiecesInfo, updateArtPiecesInfo] = useLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;
  if (artPiecesInfo.length === 0) {
    updateArtPiecesInfo(data);
  }

  const favoriteHandler = (slug) => {
    updateArtPiecesInfo(
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

  const filteredFavorite = artPiecesInfo.filter(
    (element) => element.isFavorite === true
  );
  console.log("artPiecesInfo:", artPiecesInfo);

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher, refreshInterval: 1000 }}>
        <Component
          /*  onForm={commentHandler} */
          filteredFavorite={filteredFavorite}
          isData={data}
          mutate={mutate}
          onToggle={favoriteHandler}
          artPiecesInfo={artPiecesInfo}
          updateArtPiecesInfo={updateArtPiecesInfo}
          {...pageProps}
        />
      </SWRConfig>
    </>
  );
}
