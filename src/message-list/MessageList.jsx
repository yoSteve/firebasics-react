import React from 'react'

import { useCollection } from 'react-firebase-hooks/firestore';
import './MessageList.css';

const MessageList = ({ collection }) => {
  const [ messages, loading, error ] = useCollection(collection);


  const messagesData = messages?.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    }
  });

  return (
    <div className='message-list-container'>
      { error && <strong>Something went wrong</strong> }

      { loading && <strong>Loading...</strong> }

      { messages && (
        <ul>
          {messagesData.map(message => {
            return (
              <li key={message.id}>
                <div className='message-text'>{message.text}</div>
                <div className='message-from'>- {message.from}</div>
              </li>)
          })}
        </ul>
      )}
  </div>
  )
}

export default MessageList
