import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import { useState } from 'react';

export default function ContactUs() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    //즉시 실행 함수
    // (() => {
    //     // console.log(document.querySelector('#exampleFormControlInput1').value); //Real DOM 접근 방법이지 React 스러운건(virtual DOM) 아님
    //     // console.log(email);
    //     console.log(`email: ${email}, subject: ${subject}, content: ${content}`);
    //     // alert(`email: ${email}, subject: ${subject}, content: ${content}`);
    // })();

    const handleSubmit = (e) => {
        e.preventDefault(); //이벤트의 기본 동작 취소. 즉, Form이 실행하는 기본 동작을 막는다. 주소란에 ?, name등  예) url?name=xxcx
        // console.log(document.querySelector('#exampleFormControlInput1').value); //Real DOM 접근 방법이지 React 스러운건(virtual DOM) 아님
        // alert(`email: ${email}, subject: ${subject}, content: ${content}`);
        // console.log(`email: ${email}, subject: ${subject}, content: ${content}`);        
        console.log('input data',email, subject, content);
    }    

    return (
        <div className='container'>
            <Header />
            <h1 className='font-bold'>Contact us</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">이메일</label>
                    <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                        value={ email }
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="subjectInput" className="form-label">제목</label>
                    <input type="text" className="form-control" id="subjectInput" placeholder="제목을 입력하세요" 
                        value={ subject }
                        onChange={e => setSubject(e.target.value)}
                    />
                </div>                
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">내용</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" 
                        value={ content }
                        onChange={evt => setContent(evt.target.value)}
                    />
                </div>

                <button className='btn btn-primary btn-lg'>문의하기</button>
                {/* <button className='btn btn-primary btn-lg'>문의하기</button> */}
            </form>       
        </div>  
    )
}