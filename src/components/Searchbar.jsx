import React, { useState } from "react";

function Searchbar(props) {
    const [username, setUsername] = useState("");

    function handleChange(event) {
        const { value } = event.target;
        setUsername(value);
    }


    return (
        <div class="search-bar">
        <input onChange={handleChange} value={username} type="text" placeholder="Search GitHub username..."/>
        {(props.userExists === false) && 
            <span class="search-error">No results</span>
        }
        
        <button onClick={() => {
            props.handleSearch(username);
            setUsername("");
        }}>Search</button>
    
    </div>
    )
}

export default Searchbar;