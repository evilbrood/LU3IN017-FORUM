import React from 'react';
import MessageList from './MessageList';
import ThreadMessageForm from './ThreadMessageForm';

import { useState } from 'react';
function ThreadComponent(props){
  return (
  <div className="thread">
    <MessageList messages = {props.messages} displayData = {props.displayData}/>
    <ThreadMessageForm addMessage = {props.addMessage}/>
  </div>);
}

export default ThreadComponent;
