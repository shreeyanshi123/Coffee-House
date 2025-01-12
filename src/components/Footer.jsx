import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FooterBg from "../assets/website/coffee-footer.jpg";

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const bgStyle2 = {
    backgroundImage: `url(${FooterBg})`,
    width: "100%",
    minHeight: "400px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
}

const Footer = () => {
    return (
        <div style={bgStyle2} className='text-white'>
            <div className="bg-black/40 min-h-[400px] ">
                <div className="container grid  md:grid-cols-3 ">
                    <div className='py-8 px-4'>
                        <a>
                            <h1 className='font-cursive text-4xl font-bold'>Coffee Cafe</h1>
                        </a>
                        <p className='pt-4'>Crafted Coffee,Cozy Vibes,Unforgettable Moments-Your Perfect Espresso Escape</p>

                        <a className='inline-block bg-[#3d2517] rounded-full py-3 text-sm px-2 mt-5'>
                            Visit Our Cafe
                        </a>
                    </div>

                    <div className="py-8 px-4">
                        <h1 className="text-xl font-semibold sm:text-left mb-3">
                            Important Links
                        </h1>
                        <ul className="space-y-3">
                            {FooterLinks.map((data, index) => (
                                <li key={index}>
                                    <a
                                        href={data.link}
                                        className="inline-block hover:scale-105 duration-200"
                                    >
                                        {data.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="py-8 px-4 col-span-2 sm:col-auto">
                        <h1 className="text-xl font-semibold sm:text-left mb-3">
                            Address
                        </h1>
                        <div>
                            <p className="mb-3">Noida , Uttar Pradesh</p>
                            <p>+91 1234567890</p>

                            {/* social links */}
                            <div className="flex items-center gap-3 mt-6">
                                <a href="#">
                                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                                </a>
                                <a href="#">
                                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                                </a>
                                <a href="#">
                                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer