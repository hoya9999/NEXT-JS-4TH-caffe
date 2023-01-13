import Link from 'next/link';
import Head from 'next/head';
// import {Head, Link} from 'next/document';
import Header from '../components/Header';
import { Fragment, useMemo, useState } from 'react';

console.log('Order 전역 시작');
const formatter = Intl.NumberFormat('ko-KR');    

export default function Order() {

    console.log('함수 컴포넌트 시작');
    //      [읽기전용, 쓰기전용] = useState(기본값);
    const [ hasEspresso, setHasEspresso ] = useState(false);
    const [ hasAmericano, setHasAmericano ] = useState(false);
    const [ hasLatte, setHasLatte ] = useState(false);    
    // const handleEspresso = () => setHasEspresso(!hasEspresso);
    const sum = useMemo(() => {
        console.log("useMemo 실행");
        let value = 0;    
        value += hasEspresso ? 2800 : 0;
        value += hasAmericano ? 3000 : 0;
        value += hasLatte ? 3500 : 0;
        return value;
    }, [hasEspresso, hasAmericano, hasLatte]);

    console.log('함수 렌더링 시작');
    return (
        <div className='container'>
            <Header />
            <h1 className='font-bold'>Order</h1>  

            <hr/>
            <h2 className='text-xl font-bold'>메뉴판</h2>
            <hr/>
            <dl>
                <dt>에스프레스</dt>
                <dd>
                    2,800원
                    <small>
                        <button onClick={()=>setHasEspresso(!hasEspresso)}>
                        {/* <button onClick={handleEspresso}> */}
                            [{hasEspresso ? '선택해제' : '선택'}]
                    </button>
                    </small>
                </dd>

                <dt>아메리카노</dt>
                <dd>
                    3,000원
                    <small>
                        <button onClick={()=>setHasAmericano(!hasAmericano)}>
                            [{hasAmericano ? '선택해제' : '선택'}]
                        </button>                        
                    </small>                    
                </dd>

                <dt>카페라떼</dt>
                <dd>
                    3,500원
                    <small>
                        <button onClick={()=>setHasLatte(!hasLatte)}>
                            [{hasLatte ? '선택해제' : '선택'}]
                        </button>                        
                    </small>                      
                </dd>                
            </dl>        
            <hr/>
            <h2 className='text-xl font-bold'>주문서</h2> 
            <ul className='list-unstyled'>
                {/* && true 이면, || false 이면 */}
                {hasEspresso && <li>에스프레소</li>}
                {hasAmericano && <li>아메리카노</li>}
                {hasLatte && <li>라떼</li>}                                
            </ul>
            합계 : {formatter.format(sum)} 원

            <div className='mt-4'>
                <button className='btn btn-primary btn-lg' onClick={() => {
                    if(`${sum}` == 0) {
                        alert('주문 내역이 없습니다.')
                    } else {
                        confirm(`${hasEspresso ? '에스프레소' : ''}${hasAmericano ? ' 아메리카노' : ''}${hasLatte ? ' 라떼': ''}총 주문 금액은 ${formatter.format(sum)} 원 입니다. 주문하시겠습니까?`);
                    }
                }}>
                    주문하기
                </button>
            </div>
        </div>  
    )
}