import { useState } from 'react'
import ClickableUserProfile from './ClickableUserProfile';
import Logout from './Logout';

function ConnectedUserRedirection (props) {
    const switchToProfile =(profile) => {
        props.displayData("Profile", {profile : profile, messageList : [{profile : profile, text : "MON PREMIER MESSAGE", date : "le 12 23 21"}]});
    }
    return (
        <div>
            <ClickableUserProfile profile = {props.user} switchToProfile ={switchToProfile}/>
            <Logout logOut = {props.logOut}/>
        </div>
    );
}

export default ConnectedUserRedirection;