import React from 'react';
import ScheduleDate from '../../components/Schecule/ScheduleDate';

const SchedulePage = () => {
    return (
        <div>
            <div className='text-center mt-8 mb-8 text-2xl font-bold'>대회 일정</div>
            <ScheduleDate/>
        </div>
    );
};

export default SchedulePage;