import Head from "next/head";

type MyHeadProps = {
    title: string
  };

export default function MyHead ({title, ...props}: MyHeadProps) {
    return(
        <Head>
            <title>{"My Portfolio - "+title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/my-icon.png" />
        </Head>
    )
}