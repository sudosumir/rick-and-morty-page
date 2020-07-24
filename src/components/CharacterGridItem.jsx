import React from 'react';

const CharacterGridItem = ({id,image: url,name,species,status}) => {
    return (
        <div className="card">
            <img src={ url } alt={ name }/>
            <div>
                <h2>{ name }</h2>
                <h3>Status ~ {status}</h3>
            </div>
            <h3>Species ~ {species}</h3> 
        </div>
    )
}

export default CharacterGridItem;
