import React from 'react';

import { useTranslation } from 'react-i18next';

import ResumeIcons from '../utils/navitems';


const Header = () => {

    const { t } = useTranslation();

    


    return(
        <header className='
            w-full
            h-auto

            pt-8 px-10
            md:py-5 md:px-11

            flex
            flex-col
            justify-between
            items-center

            md:flex-row 
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