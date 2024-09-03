import React from 'react';
import Main from '../../assets/Common/main.png'
import './MainMarazone.css'
import MainAd from '../Advertisement/MainAd';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
const MainMarazone = () => {
    return (
        <div>
            <div className=' h-[700px] relative ph:h-[500px] '>
                <div className='main-logo'>
                    MARAZONE
                    <Link to="/history">
                    <Button variant="text" className="flex items-center gap-2 mt-[200px] w-fit text-xl">
                        마라존 소개 바로가기{" "}
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
                    </Link>
                </div>
                <img src={Main} className='fade-left'/>
            </div>
            <div className='w-full flex  ph:flex-col-reverse'>
                <MainAd/>
                <Link to="/schedule" className='bottom-schedule ph:h-[250px]'>
                    마라톤 대회 일정 바로가기{" "}
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-12 w-12"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                    </svg>
                </Link>  
            </div>
        </div>
    );
};

export default MainMarazone;