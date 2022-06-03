import anime from 'animejs';
import Card from '../components/card';
import Menu from '../components/menu';
import Interact from 'interactjs';
import Head from 'next/head';
import React, { useEffect } from 'react';
import splt from 'spltjs';

const Home = () => {
  useEffect(() => {
    splt({
      reveal: true,
    });

    anime({
      targets: 'h1',
      opacity: [0, 1],
      duration: 2000,
      easing: 'cubicBezier(.7,-0.8,.4,1.7)',
    });

    anime({
      targets: '.reveal',
      translateY: [72, 0],
      duration: 1400,
      delay: anime.stagger(30),
      easing: 'cubicBezier(.7,-1,.3,1.9)',
    });

    anime({
      targets: 'body',
      scale: [1.5, 1],
      duration: 2000,
      easing: 'cubicBezier(.82,.05,.33,.96)',
    });

    anime({
      targets: '.social-container',
      opacity: [0, 1],
      delay: 400,
      duration: 1400,
      easing: 'cubicBezier(.7,-0.8,.4,1.7)',
    });

    anime({
      targets: '.map',
      translateY: [140, 0],
      delay: 1000,
      duration: 1200,
      easing: 'cubicBezier(.9,-0.5,.2,1.5)',
    });

    let scaleDot = 1;
    let scaleSite = 1;

    const windowSize = () => {
      splt.revert();
      if (window.innerWidth < 500) {
        scaleSite = 0.6;
        scaleDot = 2;
      } else {
        scaleSite = 1;
        scaleDot = 1;
      }
    };
    windowSize();
    window.addEventListener('resize', windowSize);

    const cards = document.querySelectorAll('.card-container');
    let num = 0;
    cards.forEach((card) => {
      num = num + 1;
      let text = num.toString();
      card.classList.add('number_' + text);
      card.style.gridColumnStart = 'a' + text;
      card.style.gridColumnEnd = 'a' + text;
      card.style.gridRowStart = 'a' + text;
      card.style.gridRowEnd = 'a' + text;

      if (num % 2 === 0) {
        card.classList.add('even');
      } else {
        card.classList.add('odd');
      }
    });

    const positionDot = document.querySelector('.position');
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
          splt.revert();
          position.x += event.dx;
          position.y += event.dy;
          event.target.style.transform = `translate(${position.x}px, ${position.y}px) scale(${scaleSite})`;

          positionDot.style.transform = `translate(${-position.x / 30}px, ${
            -position.y / 30
          }px)  scale(${scaleDot})`;
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
        <Menu />
        <div className="grid">
          <div className="title">
            <h1>
              <span className="splt">Logan Liffick</span> is a designer and
              creative developer. He helps bring life to brands, systems, and
              products.
            </h1>
            <div className="social-container">
              <a href="https://twitter.com/logan_liffick" target="_blank">
                <h3>Twitter</h3>
              </a>
              <h3 className="divider"> / </h3>
              <a href="https://github.com/loganliffick" target="_blank">
                <h3>Github</h3>
              </a>
              <h3 className="divider"> / </h3>
              <a href="https://read.cv/loganliffick" target="_blank">
                <h3>Read.cv</h3>
              </a>
            </div>
          </div>
          <Card
            title="peekaboo"
            video="./videos/peekaboo.webm"
            alt="an animation gallery"
            link="https://peekabooi.cyou"
          />
          <Card
            title="splt.js"
            video="./videos/spltjs.webm"
            alt="a text splitting javascript library"
            link="https://spltjs.com"
          />
          <Card
            title="DigitalOcean"
            video="./videos/digitalocean.webm"
            alt="a cloud computing company's website design"
            link="https://digitalocean.com"
          />
          <Card
            title="Keybored"
            video="./videos/keybored.webm"
            alt="a React-driven on-screen keyboard UI library"
            link="https://keyboredjs.com"
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
