import React from 'react';
import QRcode from '../../components/QRcode/QRcode';

const QRcodePage = () => {
    return (
        <div>
            <div className='text-center mt-8 mb-8 text-2xl font-bold'>참여 정보 입력</div>
            <QRcode/>
        </div>
    );
};

export default QRcodePage;