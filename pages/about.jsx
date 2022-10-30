import Head from 'next/head'
import Menu from './src/menu'

export default function About(){
    return(
        <div>
            <Head>
            <title>My Portfolio</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Menu/>
        <h1>About</h1>
        </div>
    )
}