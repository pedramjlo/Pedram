import React, { useEffect } from 'react';

import Header from './sections/header';
import Hero from './sections/hero';

import { useTranslation } from 'react-i18next';




const Home = () => {

    const { t, i18n } = useTranslation();


    


    return(
        <div className="
        py-5 px-16
        grid
        grid-cols-1
        md:flex md:flex-col
        w-full
        bg-custom-black
        ">
            <Header />
            <Hero />

        </div>
    );
};


export default Home;