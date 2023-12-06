import { useState } from 'react';
import { addDoc, serverTimestamp } from 'firebase/firestore';

import './AddMessage.css';

const AddMessage = ({ collection, userName }) => {
  const [ text, setText ] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    addDoc(collection, {
      createdAt: serverTimestamp(),
      from: userName,
      text
    });
  }

  return (
    <form className="add-message-form" onSubmit={handleSubmit}>
      <input type="text" value={text} placeholder='Say something...' onChange={e => setText(e.target.value)} />
      <button type="submit">Leave message</button>
    </form>
  )
}

export default AddMessage