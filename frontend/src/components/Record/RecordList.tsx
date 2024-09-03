import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Swal from 'sweetalert2';
import Loading from '../Common/Loading';
import { useNavigate } from 'react-router-dom'; 

type Competition = {
    comp_date: string;
    comp_code: number;
    comp_title: string;
    comp_div_ls: string[];
    comp_place: string;
    comp_link: string;
};

type RecordListProps = {
    dates: Competition[];
};

const RecordList: React.FC<RecordListProps> = ({ dates }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isOpenRecord, setIsOpenRecord] = useState(false);
    const [isOpenMedal, setIsOpenMedal] = useState(false);
    const [bibNum, setBibNum] = useState('');
    const [compCode, setCompCode] = useState(0);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const recordCheck = () => {
        setLoading(true)
        axios.post('http://fds', { bibNum: bibNum, compCode: compCode })
            .then((res) => {
                setLoading(false)
                console.log(res)
                navigate(`/recordprint/${compCode}/${bibNum}`)
            })
                
            .catch((err) => {
                setLoading(false)
                closeRecordDialog()
                Swal.fire({
                    icon: 'warning',
                    title: '기록이 존재하지 않습니다.'
                });
                navigate(`/recordprint/${compCode}/${bibNum}`)
            });
    };
    const medalCheck = () => {
        setLoading(true)
        axios.post('http://message', { bibNum: bibNum, compCode: compCode, message:message })
            .then((res) => {
                setLoading(false)
                Swal.fire({
                    icon: 'success',
                    title: '정보가 전송되었습니다.'
                });
                console.log(res)})
            .catch((err) => {
                closeRecordDialog();
                setLoading(false)
                Swal.fire({
                    icon: 'warning',
                    title: '없는 번호입니다.'
                });
            });
    };

    const openRecordDialog = (comp: number) => () => {
        setCompCode(comp);
        setIsOpenRecord(true);
    };

    const closeRecordDialog = () => {
        setIsOpenRecord(false);
    };

    const openMedalDialog = (comp: number) => () => {
        setCompCode(comp);
        setIsOpenMedal(true);
    };

    const closeMedalDialog = () => {
        setIsOpenMedal(false);
    };

    const itemsPerPage = 8;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dates.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    useEffect(() => {
        setCurrentPage(1);
    }, [dates]);

    return (
        <div className='w-[90rem]'>
            <div className='flex justify-evenly mt-10 mb-8'>
                <div className="flex items-center justify-center flex-1 text-center">대회 날짜</div>
                <div className="flex items-center justify-center flex-1 text-center">대회명</div>
                <div className="flex items-center justify-center flex-1 text-center">대회 장소</div>
                <div className="flex items-center justify-center flex-1 text-center">대회 구분</div>
                <div className="flex items-center justify-center flex-1 text-center">기록 조회</div>
            </div>
            <hr className="border-b-2 border-gray-500 mb-4" />
            {currentItems.map((competition) => (
                <div key={competition.comp_code}>
                    <div className="flex justify-evenly mt-4 mb-4">
                        <div className="flex items-center justify-center flex-1 text-center">{competition.comp_date}</div>
                        <div className="flex items-center justify-center flex-1 text-center">{competition.comp_title}</div>
                        <div className="flex items-center justify-center flex-1 text-center">{competition.comp_place}</div>
                        <div className="flex items-center justify-center flex-1 text-center">{competition.comp_div_ls.join(', ')}</div>
                        <div className="flex items-center justify-center flex-1 ">
                            <button
                                onClick={openRecordDialog(competition.comp_code)}
                                className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                기록 조회하기
                            </button>
                            {/* <button
                                onClick={openMedalDialog(competition.comp_code)}
                                className="select-none rounded-lg bg-gradient-to-tr from-blue-900 to-blue-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                메달각인 신청하기
                            </button> */}
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
            {isOpenRecord && (
                <div
                    className="fixed inset-0 z-[990] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm">
                    <div className="w-[500px] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl ph:w-11/12">
                        <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900 mt-2 mb-2">
                            참가번호를 입력해주세요
                        </div>
                        <hr className=" border-gray-500 ml-2 mr-2" />
                        <div className='w-auto flex justify-center items-center mt-5 mb-5'>
                            <TextField id="filled-basic" label="참가 번호" variant="outlined" margin="normal" type='number' className='h-7' onChange={(e) => { setBibNum(e.target.value) }} />
                        </div>
                        <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
                            <button
                                onClick={closeRecordDialog}
                                className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                취소
                            </button>
                            <button
                                onClick={recordCheck}
                                className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                확인
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* {isOpenMedal && (
                    <div className="fixed inset-0 z-[990] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm">
                        <div className="w-[700px] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl">
                            <div className="flex items-center p-6 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
                                매달 각인을 위한 정보를 입력해주세요
                            </div>
                            <hr className="border-gray-300 mx-6" />
                            <div className="flex flex-col gap-6 p-6 mt-8">
                                <div className="flex items-center">
                                    <label htmlFor="bib-number" className="w-[120px] font-semibold text-blue-gray-900">
                                        참가 번호:
                                    </label>
                                    <TextField
                                        id="bib-number"
                                        label="참가 번호"
                                        variant="outlined"
                                        type="number"
                                        className=""
                                        onChange={(e) => { setBibNum(e.target.value); }}
                                    />
                                </div>
                                <div className="flex items-center">
                                    <label htmlFor="engrave-message" className="w-[120px] font-semibold text-blue-gray-900">
                                        각인할 메시지:
                                    </label>
                                    <TextField
                                        id="engrave-message"
                                        label="각인할 메시지"
                                        variant="outlined"
                                        type="text"
                                        className="flex-1"
                                        onChange={(e) => { setMessage(e.target.value); }}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 p-6">
                                <button
                                    onClick={closeMedalDialog}
                                    className="px-6 py-3 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg hover:bg-red-500/10 active:bg-red-500/30"
                                >
                                    취소
                                </button>
                                <button
                                    onClick={medalCheck}
                                    className="rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85]"
                                >
                                    확인
                                </button>
                            </div>
                        </div>
                    </div>
                )} */}
            {loading && (
                <div>
                    <Loading/>
                </div>
            )}
        </div>
    );
};

export default RecordList;
