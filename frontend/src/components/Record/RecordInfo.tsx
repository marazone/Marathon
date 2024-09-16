import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import html2canvas from 'html2canvas';
import recordprint from '../../assets/Record/recordprint.jpg';
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const RecordInfo = () => {
    const { compCode, bibNum } = useParams();
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const [userName,setUserName] = useState('김성준')
    const [gender, setGender] = useState('M')
    const [compTitle, setCompTitle] = useState('어울림 마라톤 대회')
    const [compDivLs, setCompDivLs] = useState('5km')
    const [compRecord, setCompRecord] = useState('기록이 없습니다.')
    const [startRecord, setStartRecord] = useState('00:00:00')
    const [arrivalRecord, setArrivalRecord] = useState('00:00:00')
    const [totalRank, setTotalRank] = useState('1/450')
    const [genderRank, setGenderRank] = useState('1/450')
    const navigate = useNavigate();

    const navigatePrint = () =>{
        navigate(`/recordprint/${compCode}/${bibNum}`)
    }
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
            <div className='flex justify-center  flex-col items-center'>
                {/* <div className='mt-8 mb-8 me-16'>
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
                    
                </div> */}
                <div className='mt-20 w-[1000px] ph:w-3/4 gap-[80px] flex flex-col bg-light-blue-50  mb-6'>
                    <div className='text-3xl font-semibold text-center mt-10'>{compTitle}</div>
                    <div className='flex justify-around'>
                        <div>
                            <div className='text-xl font-bold'>{userName}</div>
                            <div className=' text-blue-500'># {bibNum}</div>
                        </div>
                        <div className='text-xl '>종목 : {compDivLs}</div>
                    </div>
                    <div className='text-2xl font-bold text-center text-blue-700 mb-36 '>기록 : {compRecord}</div>
                    
                </div>
                    <Button size="lg" onClick={navigatePrint} color='blue' className='text-xl self-center mb-8'>기록증</Button>
            </div>
        </div>
    );
};

export default RecordInfo;
