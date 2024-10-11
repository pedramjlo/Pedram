import React from 'react';

import { useTranslation } from 'react-i18next';

import Ir from '../../icons/iri.svg';
import GB from '../../icons/uk.svg';
import GE from '../../icons/ger.svg';
import i18n from '../../i18n';


const LanguageButtons = () => {
    
    const { t } = useTranslation();
    const languages = ['fa', 'en', 'de'];

    const setDirection = (lng) => {
        document.body.style.direction = lng === "fa" ? "rtl" : "ltr";
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setDirection(lng)
    };

    const langFlags = {
        fa: Ir,
        en: GB,
        de: GE
    };


    return(
        <div className='
        flex
        '>
            {languages.map((lng) => (
                <p key={lng}>
                    <a onClick={() => changeLanguage(lng)} className="link-opacity-75" href="#">
                        <img src={langFlags[lng]} alt={lng} />
                    </a>
                </p>
            ))}
        </div>
    );
};


export default LanguageButtons;