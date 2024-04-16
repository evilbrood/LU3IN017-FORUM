import React from 'react';
import { useState } from 'react';

import photo from "./assets/react.svg"; 

function ThreadMessageForm(props){
  const [message, setMessage] = useState('');
  const publish = evt=>{
    props.addMessage({profile: {username : "Bidon", photo: photo,  registerDate : new Date().toLocaleDateString()}, date : (new Date()).toLocaleDateString(), text : message}); 
    setMessage("");
  }
  return (
  <div>
    <label htmlFor="new-message-label">Nouveau Message</label>
    <input id="new-message" value={message} onChange={evt=>setMessage(evt.target.value)}/> 
    <button type="submit" name="publish-button" onClick={publish}>Publier</button>        
  </div>);
}

export default ThreadMessageForm;