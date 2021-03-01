import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>URL Shortening</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main></main>

      <footer></footer>
    </div>
  );
}
