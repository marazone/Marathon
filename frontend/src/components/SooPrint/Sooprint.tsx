import React from 'react';
import Sooprint1 from '../../assets/Sooprint/sooprint1.png'
import Sooprint2 from '../../assets/Sooprint/sooprint2.png'

const Sooprint = () => {
    return (
        <div>
            <div className='flex justify-center flex-col items-center gap-16 mt-10 mb-10'>
                <div className='relative flex justify-center'>
                    <img src={Sooprint1} alt="" className='ph:w-11/12'/>
                    <div className='absolute top-[90px] right-[0px] ph:hidden'>
                        <div className='text-lg font-bold mb-3'>참가자 번호표(배번)</div>
                        <div>size : 225x195mm</div>
                        <div>미국 듀퐁사의 타이벡 재질의 참가자 번호표입니다.</div>
                        <div>세계의 모든 마라톤대회나 육상대회에서 사용되고 있습니다.</div>
                        <div className='mt-3 mb-2'>[특징]</div>
                            <li>찢어지지 않습니다.</li>
                            <li>물에 젖지 않습니다.</li>
                            <li>인쇄가 가능합니다.</li>
                    </div>
                </div>
                <div className='relative flex justify-center'>
                    <img src={Sooprint2} alt="" className='ph:w-11/12' />
                    <div className='absolute top-[30px] -right-[120px] gap-[200px] flex ph:hidden '>
                        <div>
                            <div className='text-lg mb-5 font-bold'>바른 착용법(O)</div>
                            <div>전면(가슴)</div>
                            <div>가슴중앙에 고정핀으로 고정해주세요.</div>
                        </div>
                        <div>
                            <div className='text-lg mb-5 font-bold'>잘못된 착용법(X)</div>
                            <div>후면(등)</div>
                            <div>등에 달거나 번호표를 착용하고 겉옷을 입어서</div>
                            <div>번호를 가리는 일이 없도록 하세요.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sooprint;