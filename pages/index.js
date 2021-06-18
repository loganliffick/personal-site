import Head from 'next/head';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Link from './link';

const watermelon = {
  primary: '#DF8D9C',
  secondary: '#243A39',
};

const spritzer = {
  primary: '#3529C0',
  secondary: '#BDDCD4',
};

const fairey = {
  primary: '#D40E0E',
  secondary: '#F2E9DB',
};

const charged = {
  primary: '#0B08A9',
  secondary: '#DF9220',
};

const bubblegum = {
  primary: '#FF35EB',
  secondary: '#09265F',
};

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.secondary};
  }
`;

const Main = styled.main`
  color: ${(props) => props.theme.primary};
  padding: 64px;

  @media only screen and (max-width: 600px) {
    padding: 24px;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 120px;
`;

const HeroText = styled.h1`
  width: 50%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const List = styled.ul`
  margin-right: 40px;
  margin-top: 40px;
`;

export default function Home() {
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
      <ThemeProvider theme={watermelon}>
        <GlobalStyle />
        <Main>
          <Section>
            <HeroText>
              logan liffick is a designer with{' '}
              <a href="https://digitalocean.com" target="_blank" rel="noopener">
                digitalocean
              </a>
              . He builds brands, systems, and products.
            </HeroText>
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
            <p>© 2021 Logan Liffick</p>
          </footer>
        </Main>
      </ThemeProvider>
    </>
  );
}
