import React from 'react';
import { useTranslation } from 'react-i18next';

const PSCard = ({ icon, title, explain }) => {
    const { t } = useTranslation();

    return (
        <div className='
            p-3
            flex flex-col justify-center items-center text-center gap-5

            max-w-xs
            '>
            <div className='
                w-15 h-15
                md:w-1/2 md:h-1/2
                flex items-center justify-center'>
                <img className='
                    transform transition-transform duration-300 hover:scale-110
                    ' src={icon} alt={title} />
            </div>

            <div className='flex flex-col justify-center items-center text-center'>
                <span className='text-lg font-semibold text-custom-white'>{t(title)}</span>
                <span className='text-base font-medium text-custom-gray'>{t(explain)}</span>
            </div>
        </div>
    );
};

export default PSCard;