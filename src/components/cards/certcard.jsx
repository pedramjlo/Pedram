import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


const CertCard = ({id, icon, title, source}) => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = (event) => {
        event.preventDefault(); // Prevent the default anchor behavior since # takes you to the beginning of the viewport
        setIsOpen(!isOpen);
    };

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
                className="w-6/12  flex justify-center self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => RedirectToProject(source)}
            >
                {t('gotoCourse')}
            </button>
        );
    };

    return (
        <div className='flex self-center'>
            

            <a href="#" onClick={toggleModal} class="flex flex-col gap-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <img src={icon} alt="certificate" />
                <span class="font-medium text-gray-700 dark:text-gray-400">{t(title)}</span>
            </a>


            {isOpen && (
                <div className="overflow-scroll pb-10 fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50 z-50">
                    <div className="flex flex-col justify-center self-center relative p-2  w-full max-w-2xl max-h-full  bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-center text-left p-4 md:p-5  border-b rounded-t dark:border-gray-600">
                            <span class="text-lg font-bold text-gray-700 dark:text-gray-400">{t(title)}</span>
                            <button 
                                onClick={toggleModal} 
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="flex flex-col justify-center items-center p-4 md:p-5 space-y-4">
                            <img className='w-4/6 h-1/5 rounded-xl' src={icon} alt="certificate" />
                            
                        </div>
                        <div className="flex flex-col justify-start items-center p-4 md:py-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <ProjectButton />
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default CertCard;
