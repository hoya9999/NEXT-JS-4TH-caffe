import Link from 'next/link';
import Head from 'next/head';
// import {Head, Link} from 'next/document';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link 
          href="https://unpkg.com/tailwindcss@^2.0/dist/tailwind.min.css" 
          rel="stylesheet"
        />        
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
          crossOrigin="anonymous"
        />        
      </Head>
      <header className='flex flex-row p-2 justify-between'>
        <div>
          <Link href="localhost:3000">          
            <a className="btn btn-link">Caffe</a>
          </Link>
        </div>
        <div>
          <Link href="/introduce">
            <a className="btn btn-link">Introduce</a>
          </Link>
          {/* <a href="/introduce" className="btn btn-link">Introduce</a> */}
          <Link href="/introduce">
              <a className="btn btn-link">Order</a>
          </Link>
          <Link href="/introduce">
              <a className="btn btn-link">Hiring!</a>
          </Link>
          <Link href="/introduce">
              <a className="btn btn-link">Contact Us</a>
          </Link>             
          {/* <a href="#none" className="btn btn-link">Order</a>
          <a href="#none" className="btn btn-link">Hiring!</a>
          <a href="#none" className="btn btn-link">Contact Us</a> */}
        </div>
      </header>
      <h1>Caffe</h1>
    </div>              
  );
}
