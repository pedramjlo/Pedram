import React from 'react';

import { useTranslation } from 'react-i18next';

import PythonIcon from '../../icons/skills/python-icon.svg';
import DjangoIcon from '../../icons/skills/django-icon.svg';
import SQLIcon from '../../icons/skills/sql-icon.svg';
import HTMLIcon from '../../icons/skills/html-icon.svg';
import ReactIcon from '../../icons/react-icon.svg';
import BSIcon from '../../icons/skills/bs-icon.svg';



const PrimarySkills = () => {

    const { t } = useTranslation();

    return(
        <div className='
        grid grid-cols-3
        '>
            <div>
                <img src="" alt="" />
            </div>
            
        </div>
    );
};


export default PrimarySkills;