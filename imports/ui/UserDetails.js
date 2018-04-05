import React, { Component } from "react";
import { Session } from "meteor/session";
export default class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { data: {} }
    }

    componentDidMount() {
        console.log(Session.get('token'))
        this.setState({ token: Session.get('token') });
        Meteor.call("get_user_details", Session.get('token'), function (err, res) {
            if (err) {
                throw Meteor.Error(err);
            }
            else {
                console.log(res.data.data);
                this.setState({ data: res.data.data })
            }
        }.bind(this))
    }
    render() {
        return (
            
            <div className= "ui card" >
                <div className="content">
                    <div className="header">User Details</div>
                    <div className="meta">2 days ago</div>
                    <div className="description">
                    <h1>First Name: {this.state.data.first_name}</h1>
                    <h1>Last Name: {this.state.data.last_name}</h1>
                    <h1>URL: {this.state.data.url}</h1>
                    </div>
                </div>
          </div >



        )
    }
}