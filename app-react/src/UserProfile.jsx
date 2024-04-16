import React from 'react';
import ClickableUserProfile from './ClickableUserProfile';
import MessageList from './MessageList';
import { useState } from 'react';
import photo from './assets/react.svg'

function UserProfile(props){
  return (
  <div className="user-profile">
  {
    <div className="profile-details">
        <label className="username">{props.profile.username} </label> 
        <img src={props.profile.photo}/>
        <label className="register-date">{props.profile.registerDate}</label>
        <MessageList messages = {props.messageList} />
    </div>  
    


    //Pseudo
    //Photo
    //Date d'inscription
    //Réponse
    //Fil de discu

  }
  </div>
)};

export default UserProfile;