import { useRouter } from 'next/router'

const Pokemon = () => {
    const {
        query: { name },
    } = useRouter()

    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Pokemon
