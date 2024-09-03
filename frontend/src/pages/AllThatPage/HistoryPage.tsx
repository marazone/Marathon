import React from 'react';
import HisotyContent from '../../components/History/HisotyContent';

const HistoryPage = () => {
    return (
        <div>
            <div className='text-center mt-8 mb-8 text-2xl font-bold'>히스토리</div>
            <hr  className=' ml-28 mr-28'/>
            <HisotyContent/>
        </div>
    );
};

export default HistoryPage;