import React from 'react';
import RecordInfo from '../../components/Record/RecordInfo';

const RecordInfoPage = () => {
    return (
        <div>
            <div className='text-center mt-8 mb-8 text-2xl font-bold'>기록 확인</div>
            <hr  className=' ml-28 mr-28'/>
            <RecordInfo/>
        </div>
    );
};

export default RecordInfoPage;