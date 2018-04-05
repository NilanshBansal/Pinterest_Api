import {Meteor} from "meteor/meteor";
import {HTTP} from "meteor/http";

Meteor.methods({
    "get_user_details"(token){
        let baseURL = "https://api.pinterest.com/v1/";
        let path = "me/";
        let fields="first_name,id,last_name,url,account_type,bio,counts,username,created_at,image";
        let apiURL = `${baseURL}${path}?access_token=${token}&fields=${fields}`;
        let res = HTTP.call("get", apiURL);
        console.log("result : ", res);
        return res;
    },
    "get_all_pins"(token){
        let baseURL = "https://api.pinterest.com/v1/";
        let path = "me/pins/";
        let fields="id,link,note,url,attribution,media,metadata,board,color,counts,created_at,original_link,creator,image"
        let apiURL = `${baseURL}${path}?access_token=${token}&fields=${fields}`;
        let res = HTTP.call("get", apiURL);
        console.log("result : ", res);
        return res;
    }
})

