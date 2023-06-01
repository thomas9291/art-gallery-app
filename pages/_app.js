import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { useImmerLocalStorageState } from "../component/useImmerLocalStorageState/useImmerLocalStorageState";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component data={data} {...pageProps} />
      </SWRConfig>
    </>
  );
}
