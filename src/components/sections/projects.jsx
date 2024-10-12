import React from 'react';

import { useTranslation } from 'react-i18next';

import DaeiAli from '../../images/daeiALi.webp';
import DjangoImage from '../../images/Django_Python_WKeIxm6.webp';
import ReactImage from '../../images/react.js.webp';


import ProjectCard from '../cards/projectcard';




const PrimarySkills = () => {

    const { t } = useTranslation();

    const skills = [
        {id: 1, icon: DaeiAli, title: `${t('daeiAli')}`, ingreds: `${t('daeiAlingreds')}`, delivery: `${t('daeiAliDelivery')}`,  explain: `${t('daeiAliExplain')}`},
        {id: 2, icon: DjangoImage, title: `${t('blogApp')}`, ingreds: `${t('daeiAlingreds')}`, explain: `${t('daeiAliExplain')}`},
        {id: 3, icon: DjangoImage, title: `${t('todoApp')}`, ingreds: `${t('daeiAlingreds')}`, explain: `${t('daeiAliExplain')}`},
        {id: 4, icon: ReactImage, title: `${t('daeiAli')}`, ingreds: `${t('daeiAlingreds')}`, explain: `${t('daeiAliExplain')}`},
    ];

    return(
       <div>
        
       </div>
    );
};


export default PrimarySkills;