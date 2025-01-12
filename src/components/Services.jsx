import React from 'react';
import Img2 from '../assets/coffee2.png';

const ServicesData = [
    {
        id: 1,
        img: Img2,
        name: "Espresso",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.",
    },
    {
        id: 2,
        img: Img2,
        name: "Americano",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.",
    },
    {
        id: 3,
        img: Img2,
        name: "Cappuccino",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.",
    },
];

const Services = () => {
    return (
        <div className="py-10" id="services">
            <div className="container">
                {/* Heading section */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold font-cursive text-gray-800">
                        Best Coffee For You
                    </h2>
                </div>

                {/* Services Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14  md:gap-6 place-items-center">
                    {ServicesData.map((service) => (
                        <div
                            key={service.id}
                            className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl group max-w-[300px] duration-300"
                        >
                            <div className="h-[122px]">
                                <img
                                    src={service.img}
                                    alt=""
                                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h1 className="text-xl font-bold text-black">{service.name}</h1>
                                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
