import React from 'react';
import { useTranslation } from 'react-i18next';


import IR from '../../icons/iri.svg';
import GB from '../../icons/uk.svg';
import DE from '../../icons/ger.svg';

const LanguageButtons = () => {
    const { t, i18n } = useTranslation();
    const languages = ['fa', 'en', 'de'];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setDirection(lng);
    };


    const changeFont = (lng) => {
        if (lng === "fa") {
            document.body.style.fontFamily = "El Messiri";
        }
        else {
            document.body.style.fontFamily = "Montserrat";
        }
    };


    const setDirection = (lng) => {
        document.body.style.direction = lng === 'fa' ? 'rtl' : 'ltr';
    };

    const flags = {
        fa: IR,
        en: GB,
        de: DE
    };

    return (
        <div className='flex space-x-4'>
            {languages.map((lng) => (
                <button
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    className="
                        p-0
                        sm:w-0 sm:h-0
                        md:w-6 md:h-6
                        lg:w-8 lg:h-8

                        group relative inline-flex items-center justify-center overflow-hidden bg-neutral-950  transition hover:scale-110 rounded-full">
                    <img
                        className='
                            sm:w-0 sm:h-0
                            md:w-6 md:h-6
                            rounded-full
                            '
                        src={flags[lng]}
                        alt={`${lng} flag`}
                    />
                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                        <div className="relative h-full w-8 bg-white/20"></div>
                    </div>
                </button>
            ))}
        </div>
    );
};

export default LanguageButtons;
