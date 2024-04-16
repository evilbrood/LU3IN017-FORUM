import React from 'react';
import MessageComponent from './MessageComponent';
import { useState } from 'react';

function MessageList (props) {

  const SwitchToProfile = (profile) => {
    props.displayData("Profile", {profile : profile, messageList : [{profile : profile, text : "MON PREMIER MESSAGE", date : "le 12 23 21"}]});
  }

  return (<div className="message-list">
    {props.messages.map((message, index) => (
      <MessageComponent key = {index} profile = {message.profile} text = {message.text} date = {message.date} index = {index} switchToProfile = {SwitchToProfile}/>
    ))}
  </div>);
}


export default MessageList;