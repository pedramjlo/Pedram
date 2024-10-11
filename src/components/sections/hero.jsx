import React from 'react';

import Man from '../../images/man.svg';

import { useTranslation } from 'react-i18next';

const Hero = () => {

    const { t } = useTranslation();

    return(
        <div className='
        mt-8
        p-0
        flex
        flex-col
        justify-between
        content-center
        items-center
        text-center


        md:p-10 md:flex-row-reverse md:gap-18 md:text-start
        '>


            
            <img className='
            trasnform scale-110
            ' src={Man} alt="Man" 
            />

            <div className='

            flex
            flex-col
            gap-10

            '>

                <span className='
                text-4xl
                font-bold
                text-custom-white 
                leading-15
                text-balance

                md:text-start md:text-6xl md:leading-18
                '>
                {t('welcome')}
                </span>

                <div>
                    <p className='
                    text-base
                    leading-9
                    text-custom-gray
                    
                    '>
                        {t('description')}
                    </p>
                </div>

            </div>
            


            

                
        </div>
    );
};


export default Hero;