import React from 'react';
import CompRegister from '../../components/Register/CompRegister';
const RegisterPage = () => {
    return (
        <div>
            <div className='text-center mt-8 mb-8 text-2xl font-bold'>대회 등록</div>
            <CompRegister/>
        </div>
    );
};

export default RegisterPage;