import Button from 'components/Button';
import Layout from 'components/Layout';
import Section from 'components/Section';
import { auth } from 'lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { GoogleLogo } from 'phosphor-react';

const Page = () => {
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
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
      </Section>
    </Layout>
  );
};

export default Page;
