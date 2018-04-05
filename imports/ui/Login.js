import React,{Component} from "react";
import {Session} from "meteor/session";
import { Link } from 'react-router';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.login=this.login.bind(this);
        this.logout=this.logout.bind(this);
        this.state={token:null};
    }
    
    login(){
        window.PDK.login({scope:'read_public,read_relationships'},function(response){
            if(!response){console.log("no response")}
            if(response && response.error){
                console.log("Error: ",response.error);
            }
            else{
                console.log(response);
                this.setState({token:response.session.accessToken});
                Session.set('token',response.session.accessToken)
            }
        }.bind(this));
    }
    logout(){
        window.PDK.logout(function(response){
            console.log("successfully logged out!");
            this.setState({token:null});
        }.bind(this));
    }

    render(){
        return (
        <div className="ui container">
            <button className="ui positive basic button" onClick={this.login}>Login</button>
            <button className="ui negative basic button" onClick={this.logout}>Logout</button>       
            <Link to = "/user_details" className="ui secondary basic button">User Details</Link>   
            <Link to = "/get_all_pins" className="ui secondary basic button">Get All Pins</Link>   
        </div>
        )
    }
}