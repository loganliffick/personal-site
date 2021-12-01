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
░░░░░░░░░▀▀░░░░░░░▀░░░░░░░░░ hat's up?


`);

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/ApfelGrotezk-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />

        <title>Logan Liffick</title>
        <meta
          name="description"
          content="Logan Liffick is a design engineer building brands, systems, and products."
        />
        <meta name="keywords" content="logan liffick, design engineer, react" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />

        <meta property="og:title" content="Logan Liffick" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Logan Liffick" />
        <meta property="og:url" content="https://loganliffick.com" />
        <meta
          property="og:description"
          content="Logan Liffick is a design engineer building brands, systems, and products."
        />
        <meta
          property="og:image"
          content="https://www.loganliffick.com/og.jpg"
        />
        <meta name="twitter:image:alt" content="© logan liffick" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@logan_liffick" />
        <meta name="twitter:creator" content="@logan_liffick" />
        <meta
          name="google-site-verification"
          content="ugqQc2EJej0hywM0zD6iTDzuIhGCttd9t_p-kFFXm18"
        />
      </Head>
      <main>
        <section>
          <h1>
            Logan Liffick <span>©</span> 2021
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
