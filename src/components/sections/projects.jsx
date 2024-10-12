import React from 'react';

import { useTranslation } from 'react-i18next';

import DaeiAli from '../../images/daeiALi.webp';
import DjangoImage from '../../images/Django_Python_WKeIxm6.webp';
import ReactImage from '../../images/react.js.webp';

import ProjectCard from '../cards/projectcard';







const Projects = () => {

    const { t } = useTranslation();

    const projects = [
        {id: 1, icon: DaeiAli, title: `${t('daeiAli')}`, ingreds: `${t('daeiAlingreds')}`, delivery: `${t('daeiAliDelivery')}`,  explain: `${t('daeiAliExplain')}`},
        {id: 2, icon: DjangoImage, title: `${t('blogApp')}`, ingreds: `${t('daeiAlingreds')}`, explain: `${t('daeiAliExplain')}`},
        {id: 3, icon: DjangoImage, title: `${t('todoApp')}`, ingreds: `${t('daeiAlingreds')}`, explain: `${t('daeiAliExplain')}`},
        {id: 4, icon: ReactImage, title: `${t('daeiAli')}`, ingreds: `${t('daeiAlingreds')}`, explain: `${t('daeiAliExplain')}`},
    ];

    return(
            <div className='
            flex flex-col items-center gap-1 text-white
            md:pb-10
            '>
                <div className='flex text-center'>
                        <h1 className='
                        p-4
                        text-3xl font-bold text-custom-white
                        underline decoration-custom-blue underline-offset-1
                        md:underline md:decoration-custom-blue md:underline-offset-1
                        '>{t('projects')}</h1>
                </div>

                <div className='
                    flex flex-col text-center justify-center items-center gap-14
                    md:p-0 md:grid md:grid-cols-2 md:gap-
                '>

                    {projects.map(project => (
                        <ProjectCard 
                        key={project.id}
                        icon={project.icon}
                        title={project.title}
                        ingreds={project.ingreds}
                        explain={project.explain}
                        delivery={project.delivery}
                        />
                    ))}
                </div>

            </div>
      
    );
};


export default Projects;