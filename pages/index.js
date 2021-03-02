import Head from "next/head";
import Header from "../components/Header";
import HomePageContent from "../components/Home";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>URL Shortening</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <HomePageContent></HomePageContent>
      <Footer></Footer>
    </div>
  );
}
