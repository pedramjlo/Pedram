import { space } from 'postcss/lib/list';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ icon, title, ingreds, delivery, explain }) => {
    const { t } = useTranslation();

    return (
        <div
            className="block shadow-secondary-1 dark:bg-surface-dark">
                
                <img
                className="rounded-lg"
                src={icon}
                alt="icon" />

            <div className="
            p-6 text-surface dark:text-white
            
            ">
                
                <div className='
                flex flex-col items-center justify-center text-center gap-3
                '>
                    <span className="mb-2 text-xl font-bold text-custom-white leading-tight">{t(title)}</span>
                    
                    <p className="mb-4 text-base font-normal text-custom-gray">
                        {t(ingreds)}
                    </p>

                    <p className="mb-4 text-base font-normal text-custom-gray">
                        {t(explain)}
                    </p>

                </div>

                {delivery ? (
                    <span className='text-custom-green'>{t(delivery)}</span>
                ) : (
                    <div className='hidden'></div>
                )}




                
            </div>
            </div>
    );
};

export default ProjectCard;
