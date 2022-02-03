import Head from "next/head";
import Navbar from "./Navbar";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Britnik Engineering</title>
        <meta name="description" content="Britnik Engineering Web App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-body">
        {children}
      </div>
    </>
  );
}
