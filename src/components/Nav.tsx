import Button from 'components/Button';
import { auth } from 'lib/firebase';
import Image from 'next/image';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';

const Nav = () => {
  const [user, loading] = useAuthState(auth);
  console.log('is user ' + user);
  console.log('is loading ' + loading);

  return (
    <header className="mt-8 flex w-full items-center justify-center px-6 text-zinc-800 sm:px-10">
      <nav className="flex w-full max-w-5xl justify-between">
        <Link className="text-xl font-medium" href="/">
          Logan Liffick
        </Link>
        {user ? (
          <div className="flex gap-2">
            <Image
              alt={user.displayName || ''}
              height={40}
              src={user.photoURL || ''}
              width={40}
              referrerPolicy="no-referrer"
              className="rounded-full"
            />
            <Button
              text="Log out"
              onClick={() => {
                auth.signOut();
              }}
            />
          </div>
        ) : (
          <Button text="Login" onClick={() => {}} />
        )}
      </nav>
    </header>
  );
};

export default Nav;
