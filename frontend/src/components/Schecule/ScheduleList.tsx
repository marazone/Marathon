import React, { useState,useEffect } from 'react';

type Competition = {
    comp_date: string;
    comp_code: number;
    comp_title: string;
    comp_div_ls: string[];
    comp_place: string;
    comp_link: string;
};

type ScheduleListProps = {
    dates: Competition[];
};

const ScheduleList: React.FC<ScheduleListProps> = ({ dates }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dates.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    useEffect(()=>{
        setCurrentPage(1)
    },[dates])

    return (
        <div className='w-[90rem]'>
            <div className='flex justify-evenly mt-10 mb-8'>
                <div className="flex-1 text-center">대회 날짜</div>
                <div className="flex-1 text-center">대회명</div>
                <div className="flex-1 text-center">대회 장소</div>
                <div className="flex-1 text-center">대회 구분</div>
                <div className="flex-1 text-center">대회 링크</div>
            </div>
            <hr className="border-b-2 border-gray-500 mb-4" />
            {currentItems.map((competition) => (
                <div key={competition.comp_code}>
                    <div className="flex justify-evenly mt-4 mb-4">
                        <div className="flex-1 text-center">{competition.comp_date}</div>
                        <div className="flex-1 text-center">{competition.comp_title}</div>
                        <div className="flex-1 text-center">{competition.comp_place}</div>
                        <div className="flex-1 text-center">{competition.comp_div_ls.join(', ')}</div>
                        <div className="flex-1 text-center">
                        <a
                        href={`https://${competition.comp_link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 visited:text-purple-600 underline"
                        >
                        바로가기
                        </a>
                        </div>
                    </div>
                    <hr />
                </div>
            ))}
            <hr className="border-b-2 border-gray-500 mb-4" />
            <div className="flex justify-center mt-10 mb-20">
                {Array.from({ length: Math.ceil(dates.length / itemsPerPage) }, (_, index) => (
                    <button
                        key={index}
                        className={`mx-1 px-3 py-1 rounded-lg border ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => paginate(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ScheduleList;
