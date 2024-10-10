import React from 'react';

import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import ResumeIcons from '../utils/resumeicons';


const Header = () => {

    const { t } = useTranslation();

    


    return(
        <header className='
            w-full
            h-10
            py-5 px-4

            flex
            justify-between
            flex-col
            items-center

            sm:gap-10
            md:flex
        '>

                <a 
                href="#"
                >
                <span className='
                    sm:text-4xl
                    md:text-4xl
                    lg:text-2xl

                    text-custom-blue'
                >{t('logo')}</span>
                </a>

                <ResumeIcons />

            
        </header>
    );
};


export default Header;