import Image from 'next/image';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'lib/firebase';

const Nav = () => {
  const [user] = useAuthState(auth);
  return (
    <header className="mt-8 flex w-full items-center justify-center px-6 text-zinc-800 sm:px-10">
      <nav className="w-full max-w-5xl">
        <Link className="text-xl font-medium" href="/">
          Logan Liffick
        </Link>
        {user ? (
          <Image
            alt={user.displayName || ''}
            height={40}
            src={user.photoURL || ''}
            width={40}
            referrerPolicy="no-referrer"
            className="rounded-full"
            loading="lazy"
          />
        ) : (
          <Link href="/auth/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Nav;
