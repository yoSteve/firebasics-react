
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

function SignIn({ auth }) {
  const toggleSignIn = () => {
    if (auth.currentUser == null) {
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
        .then(result => console.log('Signed in as', result.user.displayName));

    } else {
      signOut(auth)
        .then(() => console.log('Signed out!'));
    }
  }

  return (
    <button className="btn-sign-in" onClick={toggleSignIn}>{auth.currentUser ? 'Sign out' : 'Sign in'}</button>
  )
}

export default SignIn;