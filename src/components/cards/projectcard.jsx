import React from 'react';
import { useTranslation } from 'react-i18next';


const ProjectCard = ({ icon, title, ingreds, delivery, explain, source }) => {
    const { t } = useTranslation();


    const RedirectToProject = (source) => {
        if (source.startsWith('http')) {
            window.location.href = source;
        } else {
            window.location.href = `http://${source}`;
        }
    };

    const ProjectButton = () => {
        return (
            <button
                className="w-8/12 flex justify-center self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => RedirectToProject(source)}
            >
                {t('gotoButton')}
            </button>
        );
    };

    return (
        <div className="flex flex-col justify-center items-center shadow-xl  rounded-xl   border border-custom-gray border-opacity-10  dark:bg-surface-dark pt-5">
            <img
                className="w-6/12 h-6/12 rounded-lg"
                src={icon}
                alt="icon"
            />

            <div className="p-6 text-surface dark:text-white flex flex-col gap-3">
                <div className="flex flex-col items-center justify-center text-center gap-3">
                    <span className="mb-2 text-xl font-bold text-custom-blue leading-tight">{t(title)}</span>
                    <p className="mb-2 text-base font-medium text-custom-gray">
                        {t(ingreds)}
                    </p>
                    <p className="mb-4 text-base font-normal text-custom-white">
                        {t(explain)}
                    </p>
                </div>

                {delivery ? (
                    <span className="text-custom-green font-medium">{t(delivery)}</span>
                ) : (
                    <div className="hidden"></div>
                )}

                <ProjectButton />
            </div>
        </div>
    );
};

export default ProjectCard;
