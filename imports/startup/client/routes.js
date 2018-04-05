import React from "react";
import {Router,Route,browserHistory} from "react-router";
import Login from "../../ui/Login";
import App from "./App";
import UserDetails from "../../ui/UserDetails";
import GetAllPins from "../../ui/getAllPins";
import OtherUserDetails from "../../ui/otherUserDetails";
    
export const routes=(
    <Router history={browserHistory}>
        <Route path="/" component={App} />    
        <Route path="/login" component={Login} />
        <Route path="/user_details" component={UserDetails} />
        <Route path="/get_all_pins" component={GetAllPins} />
        <Route path="/other_user_details" component={OtherUserDetails} />
    </Router>
)


