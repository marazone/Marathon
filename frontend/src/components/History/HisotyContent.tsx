import React from 'react';
import history1 from '../../assets/History/history1.png'
import history2 from '../../assets/History/history2.png'
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
  import { NewspaperIcon} from "@heroicons/react/24/solid";
   


const HisotyContent = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center gap-36 mt-20 mb-40'>
                <div className='relative ph:w-11/12'>
                <img src={history1} alt="" />
                <div className='absolute top-0 right-[70px] flex items-center ph:hidden '>
                    <div className='mr-[88px]'>참가자번호표</div>
                    <div className='mr-[132px]'>기록계측</div>
                    <div>사진촬영</div>
                </div>
                </div>
                <div className='flex items-center ph:flex-col-reverse ph:gap-14'>
                    <div className="w-[32rem] ph:w-4/5">
                        <Timeline>
                            <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-2">
                                <NewspaperIcon className="h-4 w-4" />
                                </TimelineIcon>
                                <Typography variant="h5" color="blue-gray">
                                2001.08.01
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography color="gary" className="font-normal text-gray-600">
                                수푸린트 개업
                                </Typography>
                            </TimelineBody>
                            </TimelineItem>
                            <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-2">
                                <NewspaperIcon className="h-4 w-4" />
                                </TimelineIcon>
                                <Typography variant="h5" color="blue-gray">
                                2007.03.01
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography color="gary" className="font-normal text-gray-600">
                                    <div>마라톤 사진</div>
                                    <div>마라톤 메일</div>
                                    <div>홈페이지 개설</div>
                                </Typography>
                            </TimelineBody>
                            </TimelineItem>
                            <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-2">
                                <NewspaperIcon className="h-4 w-4" />
                                </TimelineIcon>
                                <Typography variant="h5" color="blue-gray">
                                2007.03.04
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography color="gary" className="font-normal text-gray-600">
                                    <div>제10회 서울 마라톤</div>
                                    <div>사진 기록증</div>
                                    <div>업계최초 발송</div>
                                </Typography>
                            </TimelineBody>
                            </TimelineItem>
                            <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-2">
                                <NewspaperIcon className="h-4 w-4" />
                                </TimelineIcon>
                                <Typography variant="h5" color="blue-gray">
                                2009.12.15
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography color="gary" className="font-normal text-gray-600">
                                [마라톤메일] 상호개명
                                </Typography>
                            </TimelineBody>
                            </TimelineItem>
                            <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-2">
                                <NewspaperIcon className="h-4 w-4" />
                                </TimelineIcon>
                                <Typography variant="h5" color="blue-gray">
                                2011.10.01
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography color="gary" className="font-normal text-gray-600">
                                [올댓마라톤] 상호개명
                                </Typography>
                            </TimelineBody>
                            </TimelineItem>
                            <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-2">
                                <NewspaperIcon className="h-4 w-4" />
                                </TimelineIcon>
                                <Typography variant="h5" color="blue-gray">
                                2016.03.01
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography color="gary" className="font-normal text-gray-600">
                                    <div>[마라존] 기록계측</div>
                                    <div>사업개시</div>
                                </Typography>
                            </TimelineBody>
                            </TimelineItem>
                            <TimelineItem>
                            <TimelineHeader>
                                <TimelineIcon className="p-2">
                                <NewspaperIcon className="h-4 w-4" />
                                </TimelineIcon>
                                <Typography variant="h5" color="blue-gray">
                                2017.07.01
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody>
                                <Typography color="gary" className="font-normal text-gray-600">
                                <div>[올댓마라톤]</div>
                                <div>법인 설립</div>
                                </Typography>
                            </TimelineBody>
                            </TimelineItem>
                            
                            
                        </Timeline>
                    </div>
                    <img src={history2} alt=""  className='ph:w-4/5'/>
                </div>
            </div>
        </div>
    );
};

export default HisotyContent;