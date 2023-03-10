import '../styles/globals.css'
// import Head from 'next/head';
import Head from 'next/head';
import '../public/style.css'

function MyApp({ Component, pageProps }) {
  return <>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link 
              // href="https://unpkg.com/tailwindcss@^2.0/dist/tailwind.min.css" 
              href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"               
              rel="stylesheet"
            />
            <link 
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
              rel="stylesheet" 
              integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
              crossOrigin="anonymous"
            />
            {/* <link 
              href="/style.css" 
              rel="stylesheet" 
            />                 */}
          </Head>
          <Component {...pageProps} />
         </>
}

export default MyApp
