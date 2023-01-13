import Link from 'next/link';
import Head from 'next/head';
// import {Head, Link} from 'next/document';
import Header from '../components/Header';
import { Fragment, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';

// console.log('Order 전역 시작');
const formatter = Intl.NumberFormat('ko-KR');    
// const data = [
//     { name: '오늘의커피!', price: 2500 },
//     { name: '에스프레소', price: 2800 },
//     { name: '아메리카노', price: 3000 },
//     { name: '카페라떼', price: 3500 },
//     { name: '카페모카', price: 3800 },
// ];

// window.fetch

const fetcher = url => axios.get(url).then(res => res.data);


// export default function Order(props) {
export default function Order() {    
    // console.log( 'props.menu:', props.menu );
    // console.log('render');
    const [ menu, setMenu ] = useState( [] );
    const [ selected, setSelected ] = useState( [] );
    const { data, err } = useSWR( 'http://localhost:3000/api/menu', fetcher );
    console.log('data : ',data);

    useEffect(() => {
        //화면에 mount 되는 시점에 동작(마운트는 화면에서만 동작하고, 서버 사이드에서는 동작 안 한다. 즉, 터미널에서는 출력이 안되고, 브라우저 개발도구에서만 출력)
        // console.log('window', window);
        // console.log('useEffect');
        // const a = axios.get( 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json' );        
        // fetch( 'http://localhost:3000/api/menu' ) 
        axios.get( '/api/menu' )
             .then(res => setMenu( res.data ))
             .catch(console.warn)
        // fetch( '/api/menu' )
        //     .then( response => response.json() )
        //     // .then( json => console.log( json ) )
        //     .then( json => setMenu( json ) )
        //     .catch( console.warn )
    }, []);    
    
    // fetch("https://localhost:3000/user/post", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       id: "asd123",
    //       description: "hello world",
    //     }),
    //   }).then((response) => console.log(response));    

    // console.log("selected: ", selected);

    // const sum = useMemo(() => {
    //     console.log("useMemo 실행");

    //     // let value = 0;
    //     // selected.forEach(item => value += item.price);
    //     // return value;        
    //     return selected.reduce((preval, item) => preval + item.price, 0); // 초기값 0, item은 selected에서 받은 값
    // }, [ selected ]);


    const sum = useMemo(
        () => selected.reduce((preval, item) => preval + item.price, 0) // 초기값 0, item은 selected에서 받은 값
        , [ selected ]
    );    

    // console.log('함수 렌더링 시작');
    return (
        <div className='container'>

            <Head>
                <title>주문하기 - Caffe : 온라인 커피 주문</title>
            </Head>

            <Header />
            <h1 className='font-bold'>Order</h1>  

            <hr/>
            <h2 className='text-xl font-bold'>메뉴판</h2>
            <hr/>
            {/* <dl>
            {
                data.map(element => (
                        <>
                            <dt>{ element.name }</dt>
                            <dd>{ formatter.format(element.price) }</dd>
                        </>
                ))
            }
            </dl> */}

            {/* <dl>
            {
                data.map(element => {
                    return (
                        <>
                            <dt>{ element.name }</dt>
                            <dd>{ formatter.format(element.price) }</dd>
                        </>
                    );
                })
            }
            </dl> */}

            <dl>
            {
                // data.map(element => (                
                menu.map(element => (
                // props.menu.map(element => (    
                        <Fragment key={element.name}>
                                <dt>{ element.name }</dt>
                                <dd>{ formatter.format(element.price) }원
                                    <small>
                                        <button onClick={() => {
                                            if( selected.includes( element )) {
                                                setSelected( selected.filter( item => item !== element) );
                                            } else {
                                                setSelected( [...selected, element ] ); //element => { name: '에스프레소', price: 2800 }
                                            }
                                        }}>
                                            [ { selected.includes( element ) ? '선택해제' : '선택' } ]
                                        </button>
                                    </small>                                
                                </dd>
                        </Fragment>
                ))
            }            
            </dl> 
            <hr/>
            <h2 className='text-xl font-bold'>주문서</h2> 
            <ul className='list-unstyled'>
                { selected.map(item => <li key={item.name}>{ item.name }</li>)}
            </ul>
            합계 : {formatter.format(sum)} 원

            <div className='mt-4'>
                <button className='btn btn-primary btn-lg' onClick={() => {
                    if(`${sum}` == 0) {
                        alert('주문 내역이 없습니다.')
                    } else {
                        confirm('구매 품목 : ' + selected.map((item) => item.name) + `\n총 주문 금액은 ${formatter.format(sum)} 원 입니다. 주문하시겠습니까?`)
                        // confirm(`${hasEspresso ? '에스프레소' : ''}${hasAmericano ? ' 아메리카노' : ''}${hasLatte ? ' 라떼': ''}총 주문 금액은 ${formatter.format(sum)} 원 입니다. 주문하시겠습니까?`);
                    }
                }}>
                    주문하기
                </button>
            </div>
        </div>  
    )
}


// //pages 폴더내에서만 동작   서버사이드에서는 console로 볼수 있으나, 브라우저에서는 볼 수 없다.
// export async function getServerSideProps(context) {
//     // console.log('getServerSideProps');
//     // const res = await axios.get( 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json' );    
//     //서버 사이드이므로 전체 URL을 전부 작성해야 한다.
//     const res = await axios.get( 'http://localhost:3000/api/menu' );
//     // axios.get( 'http://localhost:3000/api/menu' )
//     //      .then( res => console.log(res.data) )
//     //      .catch( console.warn )
//     return {
//       props: {
//         menu: res.data,
//       }, // will be passed to the page component as props
//     }
// }