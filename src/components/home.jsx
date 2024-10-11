import React, { useEffect } from 'react';

import Header from './sections/header';
import Hero from './sections/hero';

import { useTranslation } from 'react-i18next';




const Home = () => {

    const { t, i18n } = useTranslation();


    


    return(
        <div className="

        pt-* pb-10 px-10
        md:py-5 md:px-16

        grid
        grid-cols-1
        gap-26
        md:flex md:flex-col md:gap-0
        w-full
        bg-custom-black
        ">
            <Header />
            <Hero />

        </div>
    );
};


export default Home;