import React, { useState } from 'react';

const SearchCharacter = ({ setCharacter }) => {

    const [inputValue, setinputValue] = useState('Rick');

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCharacter(inputValue);
            setinputValue('');
        }
    }

    return (
        <form className = "input-character" onSubmit={ handleSubmit }>
            <input
                type="text"
                value = { inputValue }
                onChange = { handleInputChange }
            />
        </form>
    )
}

export default SearchCharacter;