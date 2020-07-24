import React from 'react';
import { useFetchCharacters } from './hooks/useFetchCharacters';
import CharacterGridItem from './CharacterGridItem';

const CharacterGrid = ( {character} ) => {

    const { data, loading } = useFetchCharacters(character);
    
    return (
        <>
            <h1 className="searching-results">{ character }</h1>
            { loading && <p>Loading...</p> }
            <div className="card-grid">
                {
                    data.map( character => {
                        return <CharacterGridItem key = { character.id } { ...character }/>
                    })
                }
            </div>
        </>
    )
}

export default CharacterGrid;
