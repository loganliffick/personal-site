import React, { useState } from 'react';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import Link from '../components/link';
import Selector, {
  daydream,
  gumtree,
  berry,
  sorbet,
  rockyRoad,
  vineyard,
  GlobalStyle,
} from '../components/themes';

const Main = styled.main`
  color: ${(props) => props.theme.primary};
  padding: 64px;

  & span {
    color: ${(props) => props.theme.tertiary};
  }

  @media only screen and (max-width: 600px) {
    padding: 24px 24px 40px 24px;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 120px;

  @media only screen and (max-width: 600px) {
    margin-bottom: 80px;
  }
`;

const HeroText = styled.h1`
  width: 50%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const List = styled.ul`
  margin-right: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Div = styled.div`
  display: flex;
  position: fixed;
  top: 64px;
  right: 64px;

  @media only screen and (max-width: 600px) {
    margin-top: 24px;
    position: static;
  }
`;

export default function Home() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    console.log(theme);
  };

  return (
    <>
      <Head>
        <title>Logan Liffick</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Logan Liffick is a designer and developer specializing in web and product with a background in illustration and animation."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/ApfelGrotezk-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/SixCaps-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
      </Head>
      <ThemeProvider theme={theme === 'light' ? gumtree : berry}>
        <GlobalStyle />
        <Main>
          <Selector onClick={themeToggler} />
          <Section>
            <HeroText>
              <span>logan liffick</span> is a designer with{' '}
              <a href="https://digitalocean.com" target="_blank" rel="noopener">
                digitalocean
              </a>
              . He builds brands, systems, and products.
            </HeroText>
            <Div>
              <p>
                <a
                  href="https://instagram.com/logan_liffick"
                  target="_blank"
                  rel="noopener"
                >
                  instagram
                </a>{' '}
                /{' '}
                <a
                  href="https://twitter.com/logan_liffick"
                  target="_blank"
                  rel="noopener"
                >
                  twitter
                </a>{' '}
                /{' '}
                <a
                  href="https://read.cv/logan_liffick"
                  target="_blank"
                  rel="noopener"
                >
                  read.cv
                </a>
              </p>
            </Div>
          </Section>
          <Section>
            <List>
              <li>
                <h2>works</h2>
              </li>
              <Link name="splt.js" link="https://spltjs.com" />
              <Link name="Peekaboo" link="https://peekabooi.cyou" />
              <Link name="Builder 100" link="https://builder100.com" />
              <Link
                name="Facebook Partners"
                link="https://businesspartners.fb.com"
              />
              <Link name="Blackformat" link="https://blackformat.netlify.app" />
              <Link
                name="Coco iOS Stickers"
                link="https://apps.apple.com/pk/app/pixar-stickers-coco/id1299230002"
              />
            </List>
            <List>
              <li>
                <h2>awards</h2>
              </li>
              <Link
                name="SOTD, Purple Rock Scissors"
                link="https://www.awwwards.com/sites/purple-rock-scissors"
              />
              <Link
                name="W3, Purple Rock Scissors"
                link="https://www.w3award.com/winners/list/view/?event=1037&award=4"
              />
            </List>
            <List>
              <li>
                <h2>features</h2>
              </li>
              <Link
                name="Minimal Gallery, Blackformat"
                link="https://minimal.gallery/blackformat/"
              />
              <Link
                name="One Page Love, Blackformat"
                link="https://onepagelove.com/blackformat"
              />
              <Link
                name="Nice Very Nice, Blackformat"
                link="https://www.niceverynice.com/stories/font-pairings"
              />
            </List>
            <List>
              <li>
                <h2>speaking</h2>
              </li>
              <Link
                name="UCF Alumni Panel"
                link="https://youtu.be/6Bvfv_HbHao"
              />
            </List>
          </Section>
          <footer>
            <p>
              <span>©</span> 2021 Logan Liffick
            </p>
          </footer>
        </Main>
      </ThemeProvider>
    </>
  );
}
