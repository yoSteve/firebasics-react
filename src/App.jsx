import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';


import { FIREBASE_CONFIG }  from './secrets';
import SignIn from './SignIn';
import './App.css';
import MessageList from './MessageList';
import AddMessage from './AddMessage';

const firebaseApp = initializeApp(FIREBASE_CONFIG);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const messagesCollection = collection(db, 'messages')


function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Firebasics 🔥🔥🔥</h1>
        <div className="greeting-container">
          { user  ? (<h2>Hello, {user && user.displayName}.</h2>)
                  : (<h2>You are not signed in.</h2>) }
          <SignIn auth={auth} />
        </div>
      </header>
      <section>
        <MessageList collection={messagesCollection} />
      </section>
      <footer>
        <AddMessage collection={messagesCollection} userName={user.displayName} />
      </footer>
    </div>
  );
}

export default App;
