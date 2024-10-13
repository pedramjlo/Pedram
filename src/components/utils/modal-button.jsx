import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Call from '../../icons/contact/call-icon.svg';
import Mail from '../../icons/contact/mail-icon.svg';
import Base from '../../icons/contact/home-icon.svg';

const ModalButton = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex justify-center md:justify-start">
            <button 
                onClick={toggleModal} 
                className="transform scale-110 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                type="button"
            >
                {t('contact')}
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {t('contact')}
                            </h3>
                            <button 
                                onClick={toggleModal} 
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div className="
                        p-4 md:p-5 space-y-4
                        flex flex-col gap-10
                        ">
                            {/* Modal Body Content here */} 

                            <div>
                                <a className='flex jusify-center  flex-col self-center items-center' href="tel:+989336335973">
                                    <img className='w-8 h-8' src={Call} alt="call" />
                                    <span className='text-custom-white'>+933 633 5973</span>
                                </a>
                            </div>

                            <div>
                                <a className='flex jusify-center  flex-col self-center items-center' href="mailto:pedram_sif@tuta.io">
                                    <img className='w-8 h-8' src={Mail} alt="mail"/>
                                    <span className='text-custom-white'>pedram_sif@tuta.io</span>
                                </a>
                            </div>

                            <div className='flex jusify-center  flex-col self-center items-center'>
                                    <img className='w-8 h-8' src={Base} alt="mail"/>
                                    <span className='text-custom-white'>Kerman, Iran</span>
                            </div>

                        </div>

                        <div className="flex justify-center items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button 
                                onClick={toggleModal} 
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                {t('ok')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalButton;
