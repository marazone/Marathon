import React from 'react';
import MarathonMail from '../../components/MarathonMail/MarathonMail';

const MailPage = () => {
    return (
        <div>
            <div className='text-center mt-8 mb-8 text-2xl font-bold'>마라톤 메일</div>
            <hr  className=' ml-28 mr-28'/>
            <MarathonMail/>
        </div>
    );
};

export default MailPage;