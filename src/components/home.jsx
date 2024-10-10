import React, { useEffect } from 'react';

import Header from './sections/header';
import { useTranslation } from 'react-i18next';


import ResumeIcons from './utils/resumeicons';

const Home = () => {

    const { t, i18n } = useTranslation();


    


    return(
        <div className="
        py-5 px-16
        sm:py-
        w-full
        bg-custom-black
        ">
            <Header />

        </div>
    );
};


export default Home;