import { useState, useEffect } from 'react';
import { getCharacters } from '../helpers/getCharacters';

export const useFetchCharacters = (character) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getCharacters(character)
            .then(characters => {
                setState({
                    data: characters,
                    loading: false
                })
            })
            .catch((e) => {
                console.log('Ups! You have an error:' + e)
            })
    });

    return state;
};
