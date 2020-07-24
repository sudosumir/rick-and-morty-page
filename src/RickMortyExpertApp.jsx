import React, { useState } from 'react';
import SearchCharacter from './components/SearchCharacter';
import CharacterGrid from './components/CharacterGrid';


const RickMortyExpertApp = () => {

    const [character, setCharacter] = useState('Rick');

    return (
        <div className="main-container">
            <div className="first-sub-level">
                <img alt="Rick and Morty" className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1280px-Rick_and_Morty.svg.png" alt=""/>
                <h2>Wubba Lubba Dub Dub!</h2>
            </div>
            
            <SearchCharacter setCharacter = { setCharacter }/>
            <CharacterGrid character = { character }/>
        </div>
    )
}

export default RickMortyExpertApp;
