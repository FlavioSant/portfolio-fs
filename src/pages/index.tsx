import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

import { Abilities } from '../components/Abilities';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Projetcts } from '../components/Projects';
import { prismicClient } from '../services/prismic';

export type Project = {
  uid: string;
  title: string;
  url: {
    link_type: string;
    url: string;
  };
  image: {
    alt: string;
    dimensions: { width: number; height: number };
    url: string;
  };
};

type HomeProps = {
  projects: Project[];
};

const Home: NextPage<HomeProps> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Flávio Santos | Dev</title>
        <link rel="icon" href="static/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Abilities />
      <Projetcts projects={projects} />
      <Contact />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const prismic = prismicClient();

  const response = await prismic.query<Project>(
    [Prismic.predicates.any('document.type', ['projetos'])],
    {
      pageSize: 100,
      page: 1,
    },
  );

  const posts = response.results
    .filter(resp => resp.type === 'projetos')
    .sort((a, b) =>
      (a.first_publication_date || '') > (b.first_publication_date || '')
        ? 1
        : -1,
    );

  const projects = posts.map(post => ({
    uid: post.uid,
    title: RichText.asText(post.data.title),
    url: post.data.url,
    image: post.data.image,
  }));

  return {
    props: {
      projects,
    },
    revalidate: 1000 * 60 * 60 * 24,
  };
};

export default Home;
