import Link from 'next/link';
import Head from 'next/head';
// import {Head, Link} from 'next/document';
import Header from '../components/Header';
import { Fragment, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';

const formatter = Intl.NumberFormat('ko-KR');    

const fetcher = url => axios.get(url).then(res => res.data);

export default function Order() {    
    const [ menu, setMenu ] = useState( [] );
    const [ selected, setSelected ] = useState( [] );

    const { data, error } = useSWR( 'http://localhost:3000/api/menu', fetcher );
    //data, error 둘중에 하나는 존재
    console.log('data : ', data, 'error : ', error);

    const sum = useMemo(
        () => selected.reduce((preval, item) => preval + item.price, 0) // 초기값 0, item은 selected에서 받은 값
        , [ selected ]
    );   

    if ( error ) {
        return <>에러가 발생 했습니다.</>;
    }

    if ( !data ) {  //error == falsy, data == falsy한 상황
        return <>로딩중...</>;
    }
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

            <dl>
            {
                data.map(element => (                
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