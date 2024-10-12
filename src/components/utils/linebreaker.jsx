import React from 'react';

import ReactIcon from '../../icons/react-icon.svg';


const LineBreaker = () => {

    
    return(
        <div class="py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
            <img className='w-5 h-5 hover:animate-spin' src={ReactIcon} alt="ReactJS" />
        </div>
    );
};

export default LineBreaker;