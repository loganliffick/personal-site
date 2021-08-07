import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from '../components/themes';
import Button from '../components/button';

// const useThemeDetector = () => {
//   const getMatchMedia = () => window.matchMedia('(prefers-color-scheme: dark)');

//   const [isDarkTheme, setIsDarkTheme] = useState(getMatchMedia().matches);

//   const mqListener = (e) => {
//     setIsDarkTheme(e.matches);
//   };

//   useEffect(() => {
//     const mq = getMatchMedia();
//     mq.addListener(mqListener);
//     return () => mq.removeListener(mqListener);
//   }, []);
//   return isDarkTheme;
// };

const Main = styled.main`
  align-items: center;
  color: ${(props) => props.theme.primary};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  & span {
    color: ${(props) => props.theme.tertiary};
  }

  @media only screen and (max-width: 560px) {
    display: block;
    height: auto;
  }
`;

const Section = styled.section`
  margin: 0 64px;
  width: 1044px;

  @media only screen and (max-width: 560px) {
    margin: 32px 24px 0px 24px;
    width: auto;
  }
`;

export default function Home() {
  //const isDarkTheme = useThemeDetector();

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
        {/* <link
          rel="preload"
          href="/fonts/ApfelGrotezk-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        /> */}
      </Head>
      {/* <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}> */}
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Main>
          <Section>
            <h1>
              <span>©</span> 2021 Logan Liffick
            </h1>
            <h2>
              Showing up M-F at{' '}
              <Button url="https://digitalocean.com" name="DigitalOcean" />{' '}
              Learn more about my work on{' '}
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
          </Section>
        </Main>
      </ThemeProvider>
    </>
  );
}
