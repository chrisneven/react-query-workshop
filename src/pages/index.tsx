import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Who is this pokemon</title>
            </Head>
            <h1>Welcome to the pokemon app</h1>
            <Link href='/pokemons'>pokedex</Link>
        </div>
    )
}

export default Home
