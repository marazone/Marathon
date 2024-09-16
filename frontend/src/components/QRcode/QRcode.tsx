import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { QRCodeCanvas } from 'qrcode.react';

const QRcode = () => {
    const [name, setName] = useState('');
    const [bibNumber, setBibNumber] = useState('');
    const [engraving, setEngraving] = useState('');
    const [qrData, setQrData] = useState('');

    const handleGenerateQRCode = () => {
        if (!name || !bibNumber || !engraving) {
            alert('값을 모두 입력해주세요.');
            return;
        }

        const data = `Name: ${name}, Bib Number: ${bibNumber}, Engraving: ${engraving}`;
        setQrData(data);
    };

    return (
        <div>
            <div className='flex flex-col gap-8 items-center mb-20'>
                {qrData && (
                    <div className='mt-10 mb-10'>
                        <QRCodeCanvas value={qrData} size={256} />
                    </div>
                )}
                <div className='flex justify-center items-center gap-5 ph:flex-col'>
                    <div className='text-xl'>참여자 성함:</div> 
                    <TextField 
                        id="name" 
                        label="이름" 
                        variant="filled" 
                        className='w-30 ph:w-4/5'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='flex justify-center items-center gap-5 ph:flex-col'>
                    <div className='text-xl'>참여자 배번호:</div> 
                    <TextField 
                        id="bib-number" 
                        label="배번호" 
                        variant="filled" 
                        className='w-30 ph:w-4/5'
                        value={bibNumber}
                        onChange={(e) => setBibNumber(e.target.value)}
                    />
                </div>
                <div className='flex justify-center items-center gap-5 ph:flex-col'>
                    <div className='text-xl'>각인 내용:</div> 
                    <TextField 
                        id="engraving" 
                        label="각인 내용" 
                        variant="filled" 
                        className='w-80 ph:w-80'
                        value={engraving}
                        onChange={(e) => setEngraving(e.target.value)}
                    />
                </div>
                <Button 
                    variant="contained" 
                    startIcon={<QrCodeIcon />} 
                    size='large'
                    onClick={handleGenerateQRCode}
                >
                    QR코드 생성하기
                </Button>
                
            </div>
        </div>
    );
};

export default QRcode;
