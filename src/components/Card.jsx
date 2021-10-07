import React from "react";
import companyIcon from "../assets/icon-company.svg";
import locationIcon from "../assets/icon-location.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import websiteIcon from "../assets/icon-website.svg";

function Card(props) {

    function replaceDashesWithSpaces(date) {
        let months = [
            "None",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ]

        
        let monthNumber = date.substring(5, 7);
        
        let month; 
        if (monthNumber.charAt(0) === "0") {
            monthNumber = monthNumber.substring(1);
            month = months[monthNumber];
        } else {
            month = months[monthNumber];
        }
        
       let dateWithoutDashes =  date.replaceAll("-", " ").substring(0, 10);
    return dateWithoutDashes.substring(0,5) + month + dateWithoutDashes.substring(7,10);

    }
    return ( 
        <div class="card">
        <div class="picture-side">
        <img src={props.user.avatar_url} alt="Avatar"/>
        </div>
        <div class="data-side">
        <h2>{props.user.name ? props.user.name : props.user.username}</h2>
    <p class="username">@{props.user.username}</p>
    <p class="join-date">Joined {replaceDashesWithSpaces(props.user.join_date)}</p>
    <p class="bio">{props.user.bio ? props.user.bio : "This profile has no bio"}</p>
    <div class="follower-info">
    <div class="repos">
    <span class="stats-headings">Repos </span>
    <br></br>
    <span class="stats">{props.user.public_repos}</span>
    </div>
    <div class="followers">
    <span class="stats-headings">Followers</span> 
    <br></br>
    <span class="stats">{props.user.followers}</span>
    </div>
    <div class="following">
    <span class="stats-headings">Following</span> 
    <br></br>
    <span class="stats">{props.user.following}</span>
    </div>
    

    </div>
    
    
    <div className="links">
    <div class="twitter-and-location">
    <div>
    <img class="social-icon" src={locationIcon} alt="location"/>
    <span class="social-links">{props.user.location ? props.user.location : "Not Available"}</span>
    </div>
    <div class="twitter-links">
    <img class="social-icon" src={twitterIcon} alt="location"/>
    <span class="social-links">{props.user.twitter_username ? props.user.twitter_username : "Not Available"}</span>
    </div>
    </div>
    

    
    <div class="website-and-company">
    <div>
    <img class="social-icon" src={websiteIcon} alt="location"/>
    <span class="social-links">{props.user.blog ? props.user.blog : "Not Available"}</span>
    </div>
    <div>
    <img class="social-icon" src={companyIcon} alt="location"/>
    <span class="social-links">{props.user.company ? props.user.company : "Not Available"}</span>
    </div>
    </div>
    </div>
    
    
    
        
        </div>
        </div>
    )
}

export default Card;