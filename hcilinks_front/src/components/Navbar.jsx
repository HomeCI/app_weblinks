import React from "react";
import utilSocialNetworkIcons from './utilSocialNetworkIcons'

function Navbar(props) {
    const { companyName, socialNetworks } = props
    //console.log(JSON.stringify(props, null, 2));

    return (
        <div className="w-full container mx-auto">
            <div className="w-full flex items-center justify-between">
                <a
                    id="companyName"
                    className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                    href="#"
                >
                    {companyName}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                        TechLab
                    </span>
                </a>

                <div className="flex w-1/2 justify-end content-center">
                    {socialNetworks.map((link, index) => (
                        <a
                            key={index}
                            className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                            href={link.url}
                        >
                            {utilSocialNetworkIcons[link.name]}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar;