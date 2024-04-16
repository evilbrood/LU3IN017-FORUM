import React from 'react';

function ClickableUserProfile (props){
  const OnClickProfile = event=>{
    props.switchToProfile(props.profile)
  }

  return (<div className="messageProfile">
    <div className="message-Profile-details">
        <button className="user-id" onClick={OnClickProfile}>{props.profile.username} </button> 
        <img src={props.profile.photo}/>
    </div>  
  </div>);
}

export default ClickableUserProfile;