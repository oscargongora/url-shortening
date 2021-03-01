import Head from "next/head";
import Header from "../components/Header";
import HomePageContent from "../components/Home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>URL Shortening</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <HomePageContent></HomePageContent>
      <footer></footer>
    </div>
  );
}
