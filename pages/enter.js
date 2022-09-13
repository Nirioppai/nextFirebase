import { auth, googleAuthProvider } from '../lib/firebase';

import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function EnterPage({}) {
  const { user, username } = useContext(UserContext);
  return (
    // if user signed out, render <SignInButton/>
    // if user signed in, but missing username, render <UsernameForm/>
    // if user signed in, and has username, render <SignOutButton/>
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

function SignInButton() {
  // todo: wrap this in try catch block
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className='btn-google' onClick={signInWithGoogle}>
      <img src='/google.png' alt='Google Logo' /> Sign in with Google
    </button>
  );
}

function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm() {}
