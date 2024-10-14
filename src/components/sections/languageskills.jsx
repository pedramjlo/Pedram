import React from 'react';

import { useTranslation } from 'react-i18next';



import Farsi from "../../icons/iri.svg";
import English from "../../icons/uk.svg";
import Deutsch from "../../icons/ger.svg";

import LanguageCard from '../cards/languagescard';





const Languagelanguages = () => {
    const { t } = useTranslation();

    const languages = [
        {id: 1, icon: Farsi, title:`${t('farsi')}`, explain: `${t('farsi-exp')}`},
        {id: 2, icon: English, title:`${t('english')}`, explain: `${t('english-exp')}`},
        {id: 3, icon: Deutsch, title:`${t('deutsch')}`, explain: `${t('deutsch-exp')}`}
    ];

    return(
        <div className='
        flex flex-col items-center gap-1 text-white
        md:pb-10
       '>

            <div className='flex text-center'>
                <h1 className='
                p-4
                text-3xl font-bold text-custom-white
                underline decoration-custom-blue underline-offset-1
                md:underline md:decoration-custom-blue md:underline-offset-1
                '>{t('languages')}</h1>
            </div>

            <div className='
            my-12
            flex flex-col text-center justify-center items-center gap-20
            md:p-0 md:grid md:grid-cols-3 md:gap-44
        '>
                {languages.map(language => (
                    <LanguageCard 
                    key={language.id}
                    icon={language.icon}
                    title={language.title}
                    explain={language.explain}
                    />
                ))}
            </div>

       </div>
    );
};


export default Languagelanguages;