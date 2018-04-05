import React, { Component } from "react";
import { Session } from "meteor/session";

export default class OtherUserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { search: "" };
        this.search = this.search.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
    }
    onChangeUsername(event) {
        this.setState({ search: event.target.value });
    }
    search() {
        Meteor.call("get_other_user_details", Session.get('token'), this.state.search, (err, res) => {
            if (err) {
                throw Meteor.Error("error");
            }
            else {
                console.log(res);
            }
        })
    }
    render() {
        return (
            <div className="ui icon input">
                <input type="text" onChange={this.onChangeUsername} placeholder="Enter UserName" />
                    <i className="circular search link icon" onClick={this.search}></i>
            </div>
            )
    }
}
