import React from 'react';
import { useTranslation } from 'react-i18next';




const CertCard = ({ icon, title, source }) => {
    const { t } = useTranslation();

    

    return (
        <div>
            
            <div class="flex flex-col gap-5 max-w-sm p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <a href={t(source)}><img className='rounded-xl' src={icon} alt="/" /></a>
            <p class="font-normal text-gray-700 dark:text-gray-400">{t(title)}</p>
            </div>

        </div>    
    );
};

export default CertCard;
