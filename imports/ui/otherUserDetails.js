import React, { Component } from "react";
import { Session } from "meteor/session";

export default class OtherUserDetails extends Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.state = { data: {image:{'60x60':""},counts:""} ,search: ""}
    }
    onChangeUsername(event) {
        this.setState({ search: event.target.value });
    }
    search() {
        Meteor.call("get_other_user_details", Session.get('token'), this.state.search, function(err, res){
            if (err) {
                throw Meteor.Error("error");
            }
            else {
                console.log(res);
                this.setState({ data: res.data.data })
            }
        }.bind(this))
    }
    render() {
        return (
            <div className="ui container">
            <div className="ui icon input">
                <input type="text" onChange={this.onChangeUsername} placeholder="Enter UserName" />
                    <i className="circular search link icon" onClick={this.search}></i>
            </div>

            <div className="ui centered card" style={{width:'580px'}}>
                <div className="image">
                    <img src= {this.state.data.image["60x60"].url} style={{height:'295px'}}/>
                </div>
                <div className="content">
                    <a className="header"><em>Username:</em> {this.state.data.username}</a>
                    <div className="meta">
                        <span className="date">Created At {this.state.data.created_at}</span>
                    </div>
                    <div className="description">
                        <p> 
                            <em>First Name: </em>{this.state.data.first_name}<br />
                            <em>Last Name: </em>{this.state.data.last_name}<br />
                            <em>Account Type: </em>{this.state.data.account_type}<br />
                            
                        </p>
                        <p>
                            <em>Counts</em><br />
                            <em>No of Boards: </em>{this.state.data.counts.boards} <br /> 
                            <em>No of followers: </em>{this.state.data.counts.followers} <br />
                            <em>No of following: </em> {this.state.data.counts.following}<br />
                            <em>No of pins: </em> {this.state.data.counts.pins}<br />
                        </p>
                        <p>
                            <em>BIO: </em><br />{this.state.data.bio}
                        </p>
                        

                    </div>
                </div>
                <div className="extra content">
                        <i className="user icon"></i>
                        <em>ID: </em>{this.state.data.id}<br />
                        <em>URL: </em><a href={this.state.data.url} target="_blank">{this.state.data.url}</a>
                </div>
            </div>


            </div>
            )
    }
}
