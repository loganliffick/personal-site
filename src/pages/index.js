import React from 'react';
import Head from 'next/head';

const Button = (props) => (
  <a href={props.url} target="_blank" rel="noopener">
    {props.name}
  </a>
);

const Home = () => {
  console.log(`

▄▄▄▄▄▄▄░▄▄▄▄▄▄▄░▄▄▄▄▄▄░▄▄▄▄▄
░░▀███░░░░▀██░░░░██▀░░░░██░░
░░░▀██░░░░░▀██░░▄█░░░░░▄█░░░
░░░░███░░░░░▀██▄█░░░░░░█░░░░
░░░░░███░░░░░▀██░░░░░░█▀░░░░
░░░░░░███░░░░▄███░░░░█▀░░░░░
░░░░░░░██▄░░▄▀░███░░█▀░░░░░░
░░░░░░░▀██▄█▀░░░███▄▀░░░░░░░
░░░░░░░░▀██▀░░░░░███░░░░░░░░
░░░░░░░░░▀▀░░░░░░░▀░░░░░░░░░ hat's up


`);

  return (
    <>
      <Head>
        <title>Logan Liffick</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Logan Liffick is an interactive designer and frontend developer. He builds brands, systems, and products."
        />
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="preload"
          href="/fonts/ApfelGrotezk-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <main>
        <section>
          <h1>
            <span>©</span> 2021 Logan Liffick
          </h1>
          <h2>
            Showing up M-F at{' '}
            <Button url="https://digitalocean.com" name="DigitalOcean" /> Learn
            more about my work on{' '}
            <Button url="https://read.cv/logan_liffick" name="read.cv" /> and{' '}
            <Button url="https://github.com/logan-liffick" name="Github" />{' '}
            Follow me on{' '}
            <Button url="https://twitter.com/logan_liffick" name="Twitter" />{' '}
            and{' '}
            <Button
              url="https://instagram.com/logan_liffick"
              name="Instagram"
            />{' '}
            Send me an{' '}
            <Button url="mailto:hello@loganliffick.com" name="email" /> to
            connect.
          </h2>
        </section>
      </main>
    </>
  );
};

export default Home;
