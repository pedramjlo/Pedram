import React, { useEffect } from 'react';

import Header from './sections/header';
import Hero from './sections/hero';
import PrimarySkills from './sections/primaryskills';

import LineBreaker from './utils/linebreaker';

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

            <LineBreaker />

            <PrimarySkills />
            



        </div>
    );
};


export default Home;