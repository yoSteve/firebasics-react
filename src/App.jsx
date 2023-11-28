import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import SignIn from './SignIn';
import { FIREBASE_CONFIG }  from './secrets';
import './App.css';

initializeApp(FIREBASE_CONFIG);

const auth = getAuth();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Firebasics 🔥🔥🔥</h1>
        <SignIn auth={auth} />
      </header>
      <section>
        { user  ? (<h2>Hello, {user && user.displayName}.</h2>)
                : (<h2>You are not signed in.</h2>) }
      </section>
    </div>
  );
}

export default App;
