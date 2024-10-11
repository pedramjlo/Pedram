import React, { useEffect } from 'react';

import Header from './sections/header';
import Hero from './sections/hero';

import ReactIcons from '../icons/react-icon.svg';

import { useTranslation } from 'react-i18next';




const Home = () => {

    const { t, i18n } = useTranslation();


    


    return(
        <div className="

        pt-2 pb-10 px-10
        md:py-5 md:px-16

        flex
        flex-col
        gap-10
        md:flex md:flex-col md:gap-0
        w-full
        bg-custom-black
        ">
            <Header />
            <Hero />
            <div class="py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">

            <img className='
            w-5 h-5
            ' src={ReactIcons} alt="react" />
            </div>


        </div>
    );
};


export default Home;