import Card from '../components/card';
import Interact from 'interactjs';
import Head from 'next/head';
import React, { useEffect } from 'react';
import Splt from 'spltjs';

const Home = () => {
  useEffect(() => {
    const positionDot = document.querySelector('.position');

    // const windowSize = () => {};
    // windowSize();
    // window.addEventListener("resize", windowSize);

    const items = document.querySelectorAll('.card-container');
    let num = 0;

    Splt({});

    items.forEach((item) => {
      num = num + 1;
      let text = num.toString();
      item.classList.add('number_' + text);
      item.style.gridColumnStart = 'a' + text;
      item.style.gridColumnEnd = 'a' + text;
      item.style.gridRowStart = 'a' + text;
      item.style.gridRowEnd = 'a' + text;

      // if (item.classList.contains("number_3")) {
      //   item.style.background = "var(--prpl)";
      // }
    });

    const position = { x: 0, y: 0 };

    Interact('.grid').draggable({
      inertia: {
        resistance: 2,
        endSpeed: 1,
        smoothEndDuration: 2000,
      },
      modifiers: [
        Interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true,
        }),
      ],
      listeners: {
        move(event) {
          position.x += event.dx;
          position.y += event.dy;
          event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;

          positionDot.style.transform = `translate(${-position.x / 30}px, ${
            -position.y / 30
          }px)`;
        },
      },
    });

    Interact('.grid').styleCursor(false);
  }, []);

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
        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <title>Logan Liffick</title>
        <meta
          name="description"
          content="Logan Liffick is a design engineer building brands, systems, and products."
        />
        <meta property="og:title" content="Logan Liffick" />
        <meta
          property="og:description"
          content="Logan Liffick is a design engineer building brands, systems, and products."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Logan Liffick" />
        <meta property="og:url" content="https://loganliffick.com" />
        <meta
          property="og:image"
          content="https://www.loganliffick.com/og.jpg"
        />
        <meta name="twitter:image:alt" content="© logan liffick" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@logan_liffick" />
        <meta name="twitter:creator" content="@logan_liffick" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta
          name="google-site-verification"
          content="ugqQc2EJej0hywM0zD6iTDzuIhGCttd9t_p-kFFXm18"
        />
      </Head>
      <div className="App">
        <div className="overlay"></div>
        <div className="radial red"></div>
        <div className="radial purple"></div>
        <div className="radial yellow"></div>
        <div className="radial lite"></div>
        <div className="grid">
          <Card
            title="peekaboo"
            src="./images/project.jpg"
            alt="an animation gallery"
          />
          <Card
            title="spltjs"
            src="./images/project.jpg"
            alt="an animation gallery"
          />
          <Card
            title="DigitalOcean"
            src="./images/project.jpg"
            alt="an animation gallery"
          />
          <Card
            title="Keybored"
            src="./images/project.jpg"
            alt="an animation gallery"
          />
        </div>
        <div className="map">
          <div className="position"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
