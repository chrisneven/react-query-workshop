import { useQuery } from 'react-query'
import { Page } from 'types'

const fetcher = (): Promise<Page> => fetch('https://pokeapi.co/api/v2/pokemon/').then(res => res.json())

const Pokemons = () => {
    const { data, isLoading } = useQuery(['pokemons'], fetcher)

    if (isLoading || !data) {
        return 'Loading...'
    }

    const { results } = data

    return (
        <ul>
            {results?.map(pokemon => (
                <li key={pokemon.name}>{pokemon.name}</li>
            ))}
        </ul>
    )
}

export default Pokemons
