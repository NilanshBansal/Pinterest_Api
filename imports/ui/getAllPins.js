import React, { Component } from "react";
import { Link } from 'react-router';
export default class GetAllPins extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
        this.renderListItems = this.renderListItems.bind(this);
    }

    componentDidMount() {
        console.log(Session.get('token'))
        this.setState({ token: Session.get('token') });
        Meteor.call("get_all_pins", Session.get('token'), function (err, res) {
            if (err) {
                throw Meteor.Error(err);
            }
            else {
                console.log(res.data.data);
                this.setState({ data: res.data.data })
            }
        }.bind(this))
    }

    renderListItems() {
        let data = this.state.data || [];
        return data.map((el, i) => {
            return (



                    <div key={i} className="ui card " style={{width:'400px'}}>
                        <div className="image">
                            <img src={el.image.original.url} style={{width:'200px'}} />
                        </div>
                        <div className="content">
                            <a className="header" ></a>
                            <div className="meta">
                                <span><b>Id: </b>{el.id}</span>
                            </div>
                            <div className="description">
                                <div>
                                    <h1>Board</h1>
                                    <span><b>Id: </b>{el.board.id}</span><br />
                                    <span><b>Name: </b>{el.board.name}</span><br />
                                    <span><b>URL: </b>{el.board.url}</span><br />
                                </div>

                            </div>
                            <div>
                                <h1>Counts</h1>
                                <span><b>Comments: </b>{el.counts.comments}</span><br />
                                <span><b>Saves: </b>{el.counts.saves}</span><br />
                            </div>
                            <span><b>Created At: </b>{el.created_at}</span><br />
                            <div>
                                <h1>Creator</h1>
                                <span><b>ID: </b>{el.creator.id}</span><br />
                                <span><b>First Name: </b>{el.creator.first_name}</span><br />
                                <span><b>Last Name: </b>{el.creator.last_name}</span><br />
                                <span><b>Url: </b>{el.creator.url}</span><br />
                            </div>
                        </div>
                        <div className="extra content">
                               <span> Url: <a href={el.url} target="_blank">{el.url}</a></span>
                        </div>
                    </div>
                
            )
        })
    }

    render() {
        return (
            <div className="ui container">
            <Link to="/login" className="ui primary basic button">GO Back</Link>
            <div className="ui container" style={{display:'flex',justifyContent:'space-around'}}>
            <br /><br />
            {this.renderListItems()}
            
            </div>
            </div>
        )
    }
}