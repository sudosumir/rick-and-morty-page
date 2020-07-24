export const getCharacters = async( character ) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${character}`;
    const resp = await fetch( url );
    const { results } = await resp.json();

    const characters = results.map( character => {
        return {
            id: character.id,
            name: character.name,
            image: character.image,
            species: character.species,
            status: character.status
        }
    });

    return characters;
}