import React from 'react';
import RecordPrint from '../../components/Record/RecordPrint';

const RecordPrintPage = () => {
    return (
        <div>
            <div className='text-center mt-8 mb-8 text-2xl font-bold'>기록 확인</div>
            <hr  className=' ml-28 mr-28'/>
            <RecordPrint/>
        </div>
    );
};

export default RecordPrintPage;