import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import html2canvas from 'html2canvas';
import recordprint from '../../assets/Record/recordprint.jpg';
import { Button } from "@material-tailwind/react";

const RecordPrint = () => {
    const { compCode, bibNum } = useParams();
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const [userName,setUserName] = useState('김성준')
    const [compTitle, setCompTitle] = useState('')
    const [compDivLs, setCompDivLs] = useState('5km')
    const [compRecord, setCompRecord] = useState('기록이 없습니다.')

    const handleDownload = async () => {
        const element = document.getElementById('canvas-container');
        if (element) { 
            const canvas = await html2canvas(element as HTMLElement); 
            const dataUrl = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = '기록증.png';
            link.click();
        } else {
            console.error('Element not found!');
        }
    };

    const recordCheck = () => {
        axios.post('https://your-api-url', { bibNum: bibNum, compCode: compCode })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        recordCheck();
    }, []); 

    return (
        <div>
            <div className='flex justify-center '>
                <div className='mt-8 mb-8 me-16'>
                    <div id="canvas-container" style={{ position: 'relative', display: 'inline-block' }}>
                        <img
                            ref={imageRef}
                            src={recordprint}
                            alt="background"
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <div ref={textRef} className='absolute text-3xl font-bold top-[33%] left-[50%] translate-x-[-10%] translate-y-[-10%]'>
                            {userName}
                        </div>
                        <div ref={textRef} className='absolute text-3xl font-bold top-[43%] left-[50%] translate-x-[-10%] translate-y-[-10%]'>
                            {compDivLs}
                        </div>
                        <div ref={textRef} className='absolute text-3xl font-bold top-[53%] left-[50%] translate-x-[-10%] translate-y-[-10%]'>
                            {bibNum}
                        </div>
                        <div ref={textRef} className='absolute text-3xl font-bold top-[63%] left-[50%] translate-x-[-10%] translate-y-[-10%]'>
                            {compRecord}
                        </div>
                    </div>
                    
                </div>
                <div className='text-[30px] mt-20 w-[500px] gap-[80px] flex flex-col'>
                    <div>대회명 : {compTitle}</div>
                    <div>선수 이름 : {userName}</div>
                    <div>종목 : {compDivLs}</div>
                    <div>배번호 : {bibNum}</div>
                    <div>기록 : {compRecord}</div>
                    <Button size="lg" onClick={handleDownload} color='blue' className='text-xl self-center'>이미지 다운로드</Button>
                </div>
            </div>
        </div>
    );
};

export default RecordPrint;
