import React from 'react';

const Footer = () => {
    const companyName = 'App';
    const year = new Date().getFullYear();
    const templateBy = 'TailwindToolbox.com';

    return (
        <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
            <a className="text-gray-500 no-underline hover:no-underline" href={`&copy; ${companyName} ${year}`}>
                &copy; {companyName} {year}
            </a>
            - Template by
            <a className="text-gray-500 no-underline hover:no-underline" href={`https://www.${templateBy}`}>
                {templateBy}
            </a>
        </div>
    );
};

export default Footer;
