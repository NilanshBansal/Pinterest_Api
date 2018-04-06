import React, { Component } from "react";
import { Session } from "meteor/session";
import { Link } from 'react-router';
export default class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { data: {image:{'60x60':""},counts:""} }
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
            <div className="ui container">
            <Link to="/login" className="ui primary basic button">GO Back</Link>

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
                            <h1>First Name: {this.state.data.first_name}</h1>
                            <h1>Last Name: {this.state.data.last_name}</h1>
                            <h1>Account Type: {this.state.data.account_type}</h1>
                            <h1>URL: {this.state.data.url}</h1>
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
                        <emp>ID: </emp>{this.state.data.id}
                </div>
            </div>
            </div>
        )
    }
}