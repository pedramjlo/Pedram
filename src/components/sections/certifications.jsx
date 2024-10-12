import React from 'react';

import { useTranslation } from 'react-i18next';


import PythonCert from '../../images/certifications/python-cert.jpg';
import DjangoCert from '../../images/certifications/django-cert.jpg';
import SQLCert from '../../images/certifications/sql-cert.jpg';
import DPCert from '../../images/certifications/dp-cert.jpg';

import CertCard from '../cards/certcard';

const Certifications = () => {

    const { t } = useTranslation();

    const certs = [
        {id: 1, icon: PythonCert, title:`${t('pythonCertExplain')}`, source:`${t('pythonCourseSource')}`},
        {id: 2, icon: DjangoCert, title:`${t('djangoCertExplain')}`, source:`${t('djangoCourseSource')}`},
        {id: 3, icon: SQLCert, title:`${t('SQLCertExplain')}`, source:`${t('sqlCourseSource')}`},
        {id: 4, icon: DPCert, title:`${t('deisgnPCertExplain')}`, source:`${t('dpCourseSource')}`},
    ];

    return(
        <div className='
            flex flex-col items-center gap-10 text-white
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
                    md:grid md:grid-cols-2 md:gap-25
                '>

                    {certs.map(cert => (
                        <CertCard 
                        key={cert.id}
                        icon={cert.icon}
                        title={cert.title}
                        source={cert.source}
                        />
                    ))}
                </div>

        </div>

    );
};


export default Certifications;