import React from 'react';
import marathonmail from '../../assets/MarthonMail/marathonmail.png';

const MarathonMail = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <img src={marathonmail} className='mt-[40px] mb-[40px]' alt="Marathon Mail" />
                <div>마라톤메일은 대회참가자 사진을 촬영하여 사진기록증을 제공합니다.</div>
                <div>일반기록증 서비스도 합니다.</div>
                <div className='mt-[30px] mb-[20px] font-bold text-lg'>촬영비(촬영스탭 1명 기준)</div>
                <div className='ph:w-full overflow-x-auto ph:w-11/12'>
                <table className='border-collapse border border-gray-500'>
                    <thead>
                        <tr>
                            <th className='border border-b-[2px] border-t-[2px] border-y-gray-800 border border-x-gray-500 px-16 py-2 bg-gray-200'>지역</th>
                            <th className='border border-b-[2px] border-t-[2px] border-y-gray-800 border-x-gray-500 px-16 py-2 bg-gray-200'>촬영비</th>
                            <th className='border border-b-[2px] border-t-[2px] border-y-gray-800 border-x-gray-500 px-16 py-2 bg-gray-200'>이동경비</th>
                            <th className='border border-b-[2px] border-t-[2px] border-y-gray-800 border-x-gray-500 px-16 py-2 bg-gray-200'>사진정리</th>
                            <th className='border border-b-[2px] border-t-[2px] border-y-gray-800 border-x-gray-500 px-16 py-2 bg-gray-200'>합계</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-gray-500 px-16 py-2'>서울, 경기</td>
                            <td className='border border-gray-500 px-16 py-2'>300,000</td>
                            <td className='border border-gray-500 px-16 py-2'>50,000</td>
                            <td className='border border-gray-500 px-16 py-2'>100,000</td>
                            <td className='border border-gray-500 px-16 py-2'>450,000</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-500 px-16 py-2'>충청, 강원</td>
                            <td className='border border-gray-500 px-16 py-2'>300,000</td>
                            <td className='border border-gray-500 px-16 py-2'>100,000</td>
                            <td className='border border-gray-500 px-16 py-2'>100,000</td>
                            <td className='border border-gray-500 px-16 py-2'>500,000</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-500 px-16 py-2'>전라, 경상</td>
                            <td className='border border-gray-500 px-16 py-2'>300,000</td>
                            <td className='border border-gray-500 px-16 py-2'>150,000</td>
                            <td className='border border-gray-500 px-16 py-2'>100,000</td>
                            <td className='border border-gray-500 px-16 py-2'>550,000</td>
                        </tr>
                    </tbody>
                </table>
                </div>

                <div className='mt-[10px] text-sm mb-[70px]'>
                    <div>※ 대회스케치, 출발사진 촬영시 50,000원 추가됩니다.</div>
                    <div>※ 시상식 사진은 촬영하지 않습니다.</div>
                </div>
            </div>
        </div>
    );
};

export default MarathonMail;
