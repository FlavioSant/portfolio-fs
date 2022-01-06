import type { NextPage } from 'next';
import Head from 'next/head';
import { Abilities } from '../components/Abilities';
import { About } from '../components/About';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Flávio Santos | Dev</title>
        <link rel="icon" href="static/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Abilities />
    </>
  );
};

export default Home;
