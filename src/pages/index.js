import anime from 'animejs';
import Card from '../components/card';
import Interact from 'interactjs';
import Head from 'next/head';
import React, { useEffect } from 'react';
import Splt from 'spltjs';

const Home = () => {
  useEffect(() => {
    Splt({
      reveal: true,
    });

    anime({
      targets: '.char',
      opacity: [0, 1],
      duration: 2000,
      easing: 'cubicBezier(.7,-0.8,.4,1.7)',
    });

    anime({
      targets: 'body',
      scale: [1.5, 1],
      duration: 2000,
      easing: 'cubicBezier(.82,.05,.33,.96)',
    });

    anime({
      targets:
        '#c1 #r, #c2 #r, #c3 #r, #c4 #r, #c5 #r, #c6 #r, #c7 #r, #c8 #r, #c9 #r, #c10 #r, #c11 #r, #c12 #r, #c13 #r',
      translateY: [72, 0],
      duration: 1400,
      delay: anime.stagger(30),
      easing: 'cubicBezier(.7,-1,.3,1.9)',
    });

    anime({
      targets: '.map',
      translateY: [140, 0],
      delay: 1000,
      duration: 1200,
      easing: 'cubicBezier(.9,-0.5,.2,1.5)',
    });

    anime({
      targets: '.social-container',
      opacity: [0, 1],
      delay: 400,
      duration: 1400,
      easing: 'cubicBezier(.7,-0.8,.4,1.7)',
    });

    const titleSet = () => {
      Splt.revert();
      const spltT = document.querySelector('.splt');
      spltT.innerHTML =
        `<span class="name">Logan Liffick</span>` +
        ' is a designer and creative developer. He helps bring life to brands, systems, and products.';
    };

    const windowSize = () => {
      titleSet();
    };
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

      if (num % 2 == 0) {
        card.classList.add('even');
        console.log('even');
      } else {
        card.classList.add('odd');
        console.log('odd');
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
          titleSet();
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
        <div className="grid">
          <div className="title">
            <h1 className="splt">
              Logan Liffick is a designer and creative developer. He helps bring
              life to brands, systems, and products.
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
            // src="./images/project.gif"
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
