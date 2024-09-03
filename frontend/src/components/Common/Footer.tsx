import footerlogo from './../../assets/Common/footer_logo.png'
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className="relative bottom-0 bg-gray-100 w-full h-auto flex justify-evenly items-center ph:flex-col ph:gap-7">
            <img src={footerlogo} alt="" />
            <div className='text-sm'>
                <div>상호명 : 올댓마라톤, 사업자 등록번호 : 795-81-00825, 대표자 송기창</div>
                <div>주소 : 경기도 남양주시 경춘로 1286번안길 4-24, 1층(평내동), 대표전화 : 010-5356-9742</div>
                <div>Copyright © 2024 Marazone All rights reserved</div>
            </div>
            <Button variant="text" className="flex items-center gap-2 ph:mb-10" color='gray' onClick={()=>{navigate('/copyright')}}>
            개인정보취급방침{" "}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
            </svg>
            </Button>
    </div>
    );
};

export default Footer;
