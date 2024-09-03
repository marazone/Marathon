import React, { useState, useEffect } from 'react';
import { 
    Select, 
    Option,
    Radio,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
    Alert 
} from "@material-tailwind/react";
import RecordList from './RecordList';

function Icon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    );
}

type Competition = {
    comp_date: string;
    comp_code: number;
    comp_title: string;
    comp_div_ls: string[];
    comp_place: string;
    comp_link: string;
};

const RecordDate: React.FC = () => {
    const dates: Competition[] = [
        {comp_date: '2024.08', comp_code: 2034, comp_title:'빨리달리기', comp_div_ls: ['4km', '2km'], comp_place: '대전', comp_link: 'www.naver.com'},
        {comp_date: '2023.08', comp_code: 2034, comp_title:'빨리달리기', comp_div_ls: ['4km', '2km'], comp_place: '대전', comp_link: 'www.naver.com'},
        {comp_date: '2022.04', comp_code: 2332, comp_title:'빨리달리기', comp_div_ls: ['4km', '2km'], comp_place: '광주', comp_link: 'www.sdfver.com'},
        {comp_date: '2022.11', comp_code: 2632, comp_title:'빨리달리기', comp_div_ls: ['4km', '2km'], comp_place: '광주', comp_link: 'www.sdfver.com'},
        {comp_date: '2022.07', comp_code: 25332, comp_title:'빨리달리기', comp_div_ls: ['4km', '2km'], comp_place: '광주', comp_link: 'www.sdfver.com'},
        {comp_date: '2022.07', comp_code: 2832, comp_title:'빨리달리기', comp_div_ls: ['4km', '2km'], comp_place: '광주', comp_link: 'www.sdfver.com'},
        {comp_date: '2022.07', comp_code: 2933542, comp_title:'빨리달리기', comp_div_ls: ['4km', '2km'], comp_place: '광주', comp_link: 'www.sdfver.com'},
        {comp_date: '2021.05', comp_code: 2434, comp_title:'빨리달리기', comp_div_ls: ['4km', '2km'], comp_place: '대전', comp_link: 'www.naver.com'},
        {comp_date: '2021.05', comp_code: 2445634, comp_title:'빨리달리기', comp_div_ls: ['4km', '2km'], comp_place: '대전', comp_link: 'www.naver.com'},
        {comp_date: '2021.05', comp_code: 2465434, comp_title:'빨리달리기', comp_div_ls: ['4km', '2km'], comp_place: '대전', comp_link: 'www.naver.com'},
        {comp_date: '2021.05', comp_code: 2483834, comp_title:'빨리달리기', comp_div_ls: ['4km', '2km'], comp_place: '대전', comp_link: 'www.naver.com'},
        {comp_date: '2021.05', comp_code: 243384, comp_title:'빨리달리기', comp_div_ls: ['4km', '2km'], comp_place: '대전', comp_link: 'www.naver.com'},
        {comp_date: '2021.05', comp_code: 2433844, comp_title:'빨리달리기', comp_div_ls: ['4km', '2km'], comp_place: '대전', comp_link: 'www.naver.com'},
        {comp_date: '2021.05', comp_code: 24435834, comp_title:'빨리달리기', comp_div_ls: ['4km', '2km'], comp_place: '대전', comp_link: 'www.naver.com'},
    ];

    const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
    const years = Array.from(new Set(dates.map(date => date.comp_date.split('.')[0])));

    const currentYear = new Date().getFullYear().toString();
    const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0'); 

    const [selectedYear, setSelectedYear] = useState<string>(currentYear);
    const [selectedMonth, setSelectedMonth] = useState<string>(`${parseInt(currentMonth)}월`);

    const [filteredDates, setFilteredDates] = useState<Competition[]>(() => {
        const sortedDates = [...dates].sort((a, b) => {
            const dateA = new Date(a.comp_date.split('.').join('-'));
            const dateB = new Date(b.comp_date.split('.').join('-'));
            return dateB.getTime() - dateA.getTime();
        });
        return sortedDates;
    });

    const [showAlert, setShowAlert] = useState(false);
    const [disableRadio, setDisableRadio] = useState(false); 

    useEffect(() => {
        let filtered = dates;

        if (selectedYear) {
            filtered = filtered.filter(date => date.comp_date.startsWith(selectedYear));
        }

        if (selectedMonth) {
            const monthIndex = months.indexOf(selectedMonth) + 1;
            const monthString = monthIndex.toString().padStart(2, '0');
            filtered = filtered.filter(date => date.comp_date.split('.')[1] === monthString);
        }

        filtered.sort((a, b) => {
            const dateA = new Date(a.comp_date.split('.').join('-'));
            const dateB = new Date(b.comp_date.split('.').join('-'));
            return dateB.getTime() - dateA.getTime();
        });

        setFilteredDates(filtered);
    }, [selectedYear, selectedMonth]);

    const handleYearChange = (value: string | undefined) => {
        setSelectedYear(value || '');
    };

    const handleMonthChange = (month: string) => {
        if (!selectedYear) {
            setShowAlert(true);
            setDisableRadio(true);
            setTimeout(() => {
                setShowAlert(false);
                setDisableRadio(false); 
            }, 1500); 
            return;
        }
        setSelectedMonth(month);
    };

    const handleMonthSelectChange = (value: string | undefined) => {
        handleMonthChange(value  || '' );
    };

    return (
        <div>
            <div className='flex justify-center'>
                <div className='flex items-center gap-4 mt-3  lst:flex-col'>
                    <div className='w-25'>
                        <Select size='lg' label="연도" value={selectedYear} onChange={(e) => handleYearChange(e)}>
                            {years.map((year, index) => (
                                <Option key={index} value={year}>{year}년</Option>
                            ))}
                        </Select>
                    </div>
                    <div className='w-25 dt:hidden'>
                        <Select size='lg' label="월" value={selectedMonth} onChange={(e) => handleMonthSelectChange(e)}>
                            {months.map((month, index) => (
                                <Option key={index} value={month}>{month}</Option>
                            ))}
                        </Select>
                    </div>
                    <Card className="border-blue-gray-400 border-2 w-[73rem] ph:hidden">
                        <List className="flex-row">
                            {months.map((month, index) => (
                                <ListItem key={index} className="p-0">
                                    <label
                                        htmlFor={`horizontal-list-${month}`}
                                        className="flex w-full cursor-pointer items-center px-3 py-2"
                                    >
                                        <ListItemPrefix className="mr-3">
                                            <Radio
                                                name="horizontal-list"
                                                id={`horizontal-list-${month}`}
                                                ripple={false}
                                                className="hover:before:opacity-0"
                                                containerProps={{
                                                    className: "p-0",
                                                }}
                                                checked={selectedMonth === month}
                                                onChange={() => handleMonthChange(month)}
                                                disabled={disableRadio} 
                                            />
                                        </ListItemPrefix>
                                        <Typography
                                            color="blue-gray"
                                            className="font-medium text-blue-gray-400"
                                        >
                                            {month}
                                        </Typography>
                                    </label>
                                </ListItem>
                            ))}
                        </List>
                    </Card>
                </div>
            </div>
            {showAlert && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Alert icon={<Icon />} className='w-80 bg-blue-gray-400'>
                        연도를 먼저 선택해주세요
                    </Alert>
                </div>
            )}
            <div className='flex justify-center'>
                <RecordList dates={filteredDates}/>
            </div>
        </div>
    );
};

export default RecordDate;
