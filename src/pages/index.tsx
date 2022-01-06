import type { NextPage } from 'next';
import Head from 'next/head';
import { Navbar } from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Flávio Santos | Dev</title>
        <link rel="icon" href="static/favicon.ico" />
      </Head>
      <Navbar />
    </>
  );
};

export default Home;
