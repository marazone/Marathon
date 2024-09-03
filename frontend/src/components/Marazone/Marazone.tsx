import React from 'react';

const Marazone = () => {
    return (
        <div>
            <div className='flex justify-center items-center flex-col '>
                <div className='bg-blue-200 h-[50px] w-[450px] text-[20px] font-bold text-white text-center rounded-lg leading-[50px] mt-10 mb-4 ph:w-11/12'>네트타임(Net Time) 기록측정방식</div>
                <div className='mb-2 ph:ml-2 ph:mr-2'>참가자가 출발선을 통과한 시간부터 결승선을 통과한 시간까지 측정하여 순수하게 달린 시간을 측정하는 방식입니다.</div>
                <div className='mb-2 ph:ml-2 ph:mr-2'>네트 타임으로 측정하면 출발지점을 지날 때부터 기록이 측정되기 때문에 본인의 정확한 레이스 기록을 알 수 있습니다.</div>
                <div className='mb-2 ph:ml-2 ph:mr-2'>칩착용법을 정확히 숙지하시고 참가 종목의 계측 포인트에 설치된 매트를 정상적으로 통과하여야만 정확한 기록을 측정할 수 있습니다.</div>
                <div className='mb-2 ph:ml-2 ph:mr-2'>일회용이므로 반납하실 필요 없습니다.</div>
                <div className='bg-blue-200 h-[50px] w-[450px] text-[20px] font-bold text-white text-center rounded-lg leading-[50px] mt-6 mb-4 ph:w-11/12'>침착용법(동영상)</div>
                <div className='h-[500px] w-[900px] border border-black text-center leading-[500px] mb-14 ph:w-11/12'>동영상박스</div>
            </div>
        </div>
    );
};

export default Marazone;