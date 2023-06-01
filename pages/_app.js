import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useImmerLocalStorageState from "../component/useImmerLocalStorageState/useImmerLocalStorageState";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading, mutate } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  const favoriteHandler = (slug) => {
    updateArtPiecesInfo((draft) => {
      const element = artPiecesInfo.find((element) => element.slug === slug);
      if (element) {
        element.isFavorite = !element.isFavorite;
      } else {
        draft.push({ slug, isFavorite: false });
      }
    });
  };
  const filteredFavorite = artPiecesInfo.filter(
    (element) => element.isFavorite === true
  );
  /* const commentHandler = (formData) => {
    updateArtPiecesInfo(
      artPiecesInfo.map((element) => {
        element.isComment = formData;
      })
    );
  }; */

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher /* , refreshInterval: 1000  */ }}>
        <Component
          /* onForm={commentHandler} */
          filteredFavorite={filteredFavorite}
          data={data}
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
