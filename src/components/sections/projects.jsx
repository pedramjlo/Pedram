import React from 'react';

import { useTranslation } from 'react-i18next';

import DaeiAli from '../../images/daeiALi.webp';
import DjangoImage from '../../images/Django_Python_WKeIxm6.webp';
import ReactImage from '../../images/react.js.webp';

import ProjectCard from '../cards/projectcard';







const Projects = () => {

    const { t } = useTranslation();

    const projects = [
        {id: 1, icon: DaeiAli, title: `${t('daeiAli')}`, ingreds: `${t('daeiAliingreds')}`, delivery: `${t('daeiAliDelivery')}`,  explain: `${t('daeiAliExplain')}`, source: `${t('daeiAliSource')}`},
        {id: 2, icon: DjangoImage, title: `${t('blogApp')}`, ingreds: `${t('blogAppingreds')}`, explain: `${t('blogAppExplain')}`, source: `${t('blogAppSource')}`},
        {id: 3, icon: DjangoImage, title: `${t('todoApp')}`, ingreds: `${t('todoAppingreds')}`, explain: `${t('todoAppExplain')}`, source: `${t('todoAppSource')}`},
        {id: 4, icon: ReactImage, title: `${t('portfolio')}`, ingreds: `${t('portfolio-ingreds')}`, explain: `${t('daeiAliExplain')}`, source: `${t('pedramjalali-portfolio.ir')}`},
    ];

    return(
            <div className='
            flex flex-col items-center gap-5 text-white
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
                    md:grid md:grid-cols-2 md:gap-10
                '>

                    {projects.map(project => (
                        <ProjectCard 
                        key={project.id}
                        icon={project.icon}
                        title={project.title}
                        ingreds={project.ingreds}
                        explain={project.explain}
                        delivery={project.delivery}
                        source={project.source}
                        />
                    ))}
                </div>

            </div>
      
    );
};


export default Projects;