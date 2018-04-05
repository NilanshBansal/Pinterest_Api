import React,{Component} from "react";
import ReactDOM from  "react-dom";
import { Link } from 'react-router';
import Login from "../../ui/Login"

export default class App extends Component{
    constructor(props){
        super(props);
    }

    setPDK(){
        window.pAsyncInit = function() {
            PDK.init({
                appId: '4959112152574082755',
                cookie: true
            });
        };
    
        (function(d, s, id){
            var js, pjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//assets.pinterest.com/sdk/sdk.js";
            pjs.parentNode.insertBefore(js, pjs);
        }(document, 'script', 'pinterest-jssdk'));
    }
    componentDidMount(){
        console.log('gefgdg');
        this.setPDK();
    }
    render(){
        return (
        <div>
            <h1>hello</h1>
            <Link to="/login" className="ui primary basic button">GO to Login Page</Link>
            <Login />   
        </div>)
    }
}
