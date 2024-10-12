import React from 'react';

import { useTranslation } from 'react-i18next';

import PythonIcon from '../../icons/skills/python-icon.svg';
import DjangoIcon from '../../icons/skills/django-icon.svg';
import SQLIcon from '../../icons/skills/db-icon.svg';
import HTMLIcon from '../../icons/skills/html-icon.svg';
import ReactIcon from '../../icons/react-icon.svg';
import BSIcon from '../../icons/skills/bs-icon.svg';
import CsharpIcon from '../../icons/skills/cs-icon.svg';
import LinuxIcon from '../../icons/skills/linux-icon.svg';


import Card from '../utils/card';



const PrimarySkills = () => {

    const { t } = useTranslation();

    const skills = [
        {id: 1, icon: PythonIcon, title:`${t('python')}`, explain: `${t('python-exp')}`},
        {id: 2, icon: DjangoIcon, title:`${t('django')}`, explain: `${t('django-exp')}`},
        {id: 3, icon: ReactIcon, title:`${t('react')}`, explain: `${t('react-exp')}`},
        {id: 4, icon: SQLIcon, title:`${t('sql')}`, explain: `${t('sql-exp')}`},
        {id: 5, icon: HTMLIcon, title:`${t('htmlcss')}`, explain: `${t('html-exp')}`},
        {id: 6, icon: CsharpIcon, title:`${t('csharp')}`, explain: `${t('csharp-exp')}`},
        {id: 7, icon: LinuxIcon, title:`${t('linux')}`, explain: `${t('linux-exp')}`},
        {id: 8, icon: BSIcon, title:`${t('bootstrap')}`, explain: `${t('bootstrap-exp')}`},
    ];

    return(
       <div className='
        flex flex-col items-center gap-10 text-white
       '>

        <div className='flex text-center'>
            <h1 className='
            text-3xl font-bold
            underline decoration-custom-blue underline-offset-1
            md:underline md:decoration-custom-blue md:underline-offset-1
            '>{t('primarySkills')}</h1>
        </div>

        <div className='
        flex flex-col text-center justify-center items-center gap-14
        md:grid md:grid-cols-3 md:gap-20
       '>
        {skills.map(skill => (
            <Card 
            key={skill.id}
            icon={skill.icon}
            title={skill.title}
            explain={skill.explain}
            />
        ))}`
        </div>

       </div>
    );
};


export default PrimarySkills;