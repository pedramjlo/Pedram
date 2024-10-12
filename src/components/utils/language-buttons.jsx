import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FARSI from '../../icons/iri.svg';
import ENGLISH from '../../icons/uk.svg';
import DEUTSCH from '../../icons/ger.svg';
import i18n from '../../i18n';

const LanguageButtons = () => {
    const { t } = useTranslation();
    const [activeLang, setActiveLang] = useState(i18n.language);

    const languages = ['fa', 'en', 'de'];

    const setDirection = (lng) => {
        document.body.style.direction = lng === "fa" ? "rtl" : "ltr";
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setDirection(lng);
        setActiveLang(lng);
    };

    const langFlags = {
        fa: FARSI,
        en: ENGLISH,
        de: DEUTSCH
    };

    return (
        <div className='flex gap-3 md:gap-8'>
            {languages.map((lng) => (
                <button key={lng} onClick={() => changeLanguage(lng)} className={`
                group relative inline-flex w-8 h-8 items-center justify-center overflow-hidden rounded-full bg-none px-0 font-medium transition
                md:hover:scale-110 
                ${activeLang === lng ? 'border border-cyan-500 md:scale-95 md:bg-cyan-700 md:shadow md:shadow-cyan-600/50' : ''}
                `}>
                    <img className="w-full h-full object-cover rounded-full" src={langFlags[lng]} alt={lng} />
                    <div className="absolute inset-0 h-full w-full justify-center md:group-hover:duration-1000 md:group-hover:[transform:skew(-12deg)_translateX(100%)] hidden md:flex">
                        <div className="relative h-full w-8 bg-white/10"></div>
                    </div>
                </button>
            ))}
        </div>
    );
};

export default LanguageButtons;
