import Button from 'components/Button';
import Layout from 'components/Layout';
import Section from 'components/Section';
import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from 'lib/firebase';
import { GoogleLogo, TwitterLogo } from 'phosphor-react';

const Page = () => {
  const googleProvider = new GoogleAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // console.log(result.user);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const twitterLogin = async () => {
    try {
      const result = await signInWithPopup(auth, twitterProvider);
      // console.log(result.user);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <Section>
        <Button onClick={googleLogin} text="Log in with Google" type="primary">
          <GoogleLogo weight="bold" />
        </Button>
        <Button
          onClick={twitterLogin}
          text="Log in with Twitter"
          type="primary"
        >
          <TwitterLogo weight="bold" />
        </Button>
      </Section>
    </Layout>
  );
};

export default Page;
