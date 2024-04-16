import React from 'react';
import MessageList from './MessageList';
import { useState } from 'react';
import ThreadComponent from './ThreadComponent';
import ThreadTitle from './ThreadTitle';
function ThreadList (props) {

  const switchToThread = (messages) => {
    props.displayData("Thread", messages);
  }

  return (<div className="message-list">
    {props.threads.map((thread, index) => (
      <ThreadTitle key = {index} title = {thread.title} threadId = {thread.Id} switchToThread = {switchToThread}/>
    ))}
  </div>);
}


export default ThreadList;