import Link from 'next/link';
import Head from 'next/head';
// import {Head, Link} from 'next/document';
import Header from '../components/Header';
import { Fragment, useMemo, useState } from 'react';

console.log('Order 전역 시작');
const formatter = Intl.NumberFormat('ko-KR');    
const data = [
    { name: '오늘의커피!', price: 2500 },
    { name: '에스프레소', price: 2800 },
    { name: '아메리카노', price: 3000 },
    { name: '카페라떼', price: 3500 },
    { name: '카페모카', price: 3800 },
];

export default function Order() {
    console.log('함수 컴포넌트 시작');

    const [ selected, setSelected ] = useState( [] );
    console.log("selected: ", selected);

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

    console.log('함수 렌더링 시작');
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