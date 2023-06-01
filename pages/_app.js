import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { useImmerLocalStorageState } from "../component/useImmerLocalStorageState/useImmerLocalStorageState";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: data }
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
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

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          onToggle={favoriteHandler}
          data={data}
          artPiecesInfo={artPiecesInfo}
          updateArtPiecesInfo={updateArtPiecesInfo}
          {...pageProps}
        />
      </SWRConfig>
    </>
  );
}
