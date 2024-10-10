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
            py-8 px-12
            md:py-8 md:px-12

            flex
            flex-col
            justify-between
            items-center
            gap-8

            md:flex-row 

            


            md:flex
        '>

                <a 
                href="#"
                >
                <span className='
                    font-extrabold
                    text-3xl
                    tracking-widest
                    
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