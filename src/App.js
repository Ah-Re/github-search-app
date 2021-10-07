import './App.css';
import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Card from "./components/Card";
import axios from 'axios';

function App() {
  
  const [userData, setUserData] = useState({
    name: "",
    avatar_url: "",
    join_date: "",
    username: "",
    bio: "",
    followers: "",
    following: "",
    public_repos: "",
    location: "",
    blog: "",
    twitter_username: "",
    company: ""
  });

  const [userExists, setUserExists] = useState(true);

  useEffect(() => {
    const url = "https://api.github.com/users/octocat";
    axios.get(url)
    .then(res => {
      setUserData({
        name: res.data.name,
        avatar_url: res.data.avatar_url,
        join_date: res.data.created_at,
        username: res.data.login,
        bio: res.data.bio,
        followers: res.data.followers,
        following: res.data.following,
        public_repos: res.data.public_repos,
        location: res.data.location,
        blog: res.data.blog,
        twitter_username: res.data.twitter_username,
        company: res.data.company,

      })
    })
  }, [])

  function handleSearch(username) {
    const url = "https://api.github.com/users/" + username;
    axios.get(url)
    .then(res => {
      setUserData({
        name: res.data.name,
        avatar_url: res.data.avatar_url,
        join_date: res.data.created_at,
        username: res.data.login,
        bio: res.data.bio,
        followers: res.data.followers,
        following: res.data.following,
        public_repos: res.data.public_repos,
        location: res.data.location,
        blog: res.data.blog,
        twitter_username: res.data.twitter_username,
        company: res.data.company,

      }); 
      setUserExists(true);
    }) .catch(err => {
      setUserExists(false);
    })
  }

  return (
    <div className="App">
    <div className="container">
<Navbar />
<Searchbar userExists={userExists} handleSearch={handleSearch}/>
<Card user={userData}/>
</div>
    </div>
  );
}

export default App;
