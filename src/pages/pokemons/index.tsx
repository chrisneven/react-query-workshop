import { useQuery } from 'react-query'
import { Page } from 'types'

const fetcher = (): Promise<Page> => fetch('https://pokeapi.co/api/v2/pokemon/').then(res => res.json())

/**
 * This is the pokedex where you can see all the pokemons.
 *
 * Exercise 3: Add pagination
 *
 * Description: As you can see, the pokedex is a list of pokemons. But not all the pokemons are currently displayed.
 * Which makes sense because fetching all the pokemons at once is probably not a good idea. Can you try to add pagination?
 *
 *
 */
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
