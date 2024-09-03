import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[999] flex-col">
            <FadeLoader color='white' />
            <div className='mt-7 text-xl font-extrabold text-white'>잠시만 기다려주세요..</div>
        </div>
    );
};

export default Loading;
