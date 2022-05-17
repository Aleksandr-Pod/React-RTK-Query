import { useGetPokemonByNameQuery } from './API/PokemonAPI';

export default function Pokemon () {
    const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
    console.log(data);
    console.log(error);
    console.log(isLoading);
    return (
        <>
            <h2>Pokemon {data.name}</h2>
            <img src={data.sprites.other.home.front_default} alt={data.name} width="200px"></img>
        </>
    )
}