import React from 'react';
import ClickableUserProfile from './ClickableUserProfile';
import photo from "./assets/react.svg"
function ThreadTitle (props){
  return (<div className="thread-clickable-title">
     <button type="submit" onClick={evt=>props.switchToThread([{profile:{username : "alzirkbj", registerDate: "aezrae", photo : photo}, text : "NEW TERAEIRAR", date : "11 11 11"}])}>{props.title}</button>
  </div>);
}

export default ThreadTitle;