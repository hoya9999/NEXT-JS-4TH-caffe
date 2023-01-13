import Link from 'next/link';
// import {Head, Link} from 'next/document';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Header from '../components/Header';
import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  // useEffect(() => {
  //   require('fs')
  // }, []);

  return (
    // <div className='container'>
      <Head>
        <title>메인 - Caffe : 온라인 커피 주문</title>
      </Head>

      <Header />

      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Caffe</h1>
          <p className="col-md-8 fs-4">온라인으로 주문하고 편하게 커피를 받아 보세요!</p>
          <Link href='/introduce'>
            <button className="btn btn-outline-primary btn-lg" type="button">Caffe 소개</button>
          </Link>
          <Link  href='/order'>
            <button className="btn btn-outline-secondary btn-lg ml-2" type="button">주문하기</button>
          </Link>
        </div>
      </div>
    {/* </div>               */}
  );
}
