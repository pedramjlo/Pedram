import React from 'react';
import Linkedin from '../../icons/linkedin.svg';
import Github from '../../icons/gh.svg';

const ResumeIcons = () => {

    const RedirectToProject = (path) => {
        if (path.startsWith('http')) {
            window.location.href = path;
        } else {
            window.location.href = `http://${path}`;
        }
    };

    return (
        <div className='
        flex
         gap-1'>

            <button className="
                w-full
                md:w-1/2
                rounded-full
                cursor-pointer
                px-3 py-1 text-sm text-white shadow-lg shadow-neutral-500/20 transition active:scale-[.95]
            ">

                <img className='
                w-10 h-10
                ' src={Linkedin} alt="Linkedin" />
            </button>  

          

            <button  className="
                w-full
                md:w-1/2              rounded-full
                cursor-pointer
                px-3 py-1 text-sm text-white shadow-lg shadow-neutral-500/20 transition active:scale-[.95]
            " onClick={() => RedirectToProject("https://github.com/pedramjlo")}
            >
                

                <img className='
                w-10 h-10
                ' src={Github} alt="Github" />
            </button> 
        </div>
    );
};

export default ResumeIcons;
