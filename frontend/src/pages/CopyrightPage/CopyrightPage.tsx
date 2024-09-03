import React from 'react';
import CopyRightRule from '../../components/CopyRight/CopyRightRule';

const CopyrightPage = () => {
    return (
        <div>
            <div className='text-center mt-8 mb-8 text-2xl font-bold'>개인정보취급방침</div>
            <hr  className=' ml-28 mr-28'/>
            <CopyRightRule/>
        </div>
    );
};

export default CopyrightPage;