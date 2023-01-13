import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';

export default function Hiring() {
    return(
        <div className='container'>
            <Header />
            <h1 className='font-bold'>Hiring!</h1>   
            <p>Caffe에서는 상시 직원을 구인중에 있습니다!</p>       
        </div>  
    )
}