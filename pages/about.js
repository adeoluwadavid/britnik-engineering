import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
export default function About() {
    useEffect(() => {
        const burger = document.getElementById("burger");
        const secondBurger = document.getElementById("burger2");
        const menu = document.getElementById("menu");
        burger.addEventListener("click", () => {
            if (menu.classList.contains("hidden")) {
                menu.classList.remove("hidden");
            }
            else {
                menu.classList.add("hidden");
            }
            document.getElementById("showBg").style = "background-color: #3b82f6";
            secondBurger.classList.remove("hidden");
            burger.classList.add("hidden");
        });
        secondBurger.addEventListener("click", () => {
            if (menu.classList.contains("hidden")) {
                menu.classList.remove("hidden");
            } else {
                menu.classList.add("hidden");
            }
            document.getElementById("showBg").style.backgroundColor = null;
            burger.classList.remove("hidden");
            secondBurger.classList.add("hidden");
        });
    }, []);
    return (
        <div>
            <div
                id="showBg"
                className="flex flex-col pb-4"
            >
                <div className=" lg:hidden self-end mr-8">
                    <div id="burger" className="pt-4">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </div>
                    <div className="hidden pt-4" id="burger2">
                        <svg
                            className="w-6 h-6"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </div>
                </div>
                <div id="menu" className="hidden lg:block">
                    <div className="flex flex-col items-center lg:flex-row p-3 lg:bg-black text-white">
                        <div className="mb-5 lg:mb-0 mr-5 lg:ml-[10vw] flex items-center">
                            <Image
                                src="/mobile-phone.png"
                                alt="smartphone"
                                width={25}
                                height={25}
                            />
                            <span className="ml-2">09082183969</span>
                        </div>
                        <div className="mb-5 lg:mb-0 mr-5 flex items-center">
                            <Image
                                src="/location.png"
                                alt="smartphone"
                                width={25}
                                height={25}
                            />
                            <span className="ml-2">30 Ayepe Zone A, New Ife Road, Ibadan</span>
                        </div>
                        <div className="mb-5 lg:mb-0 mr-5 flex items-center">
                            <Image
                                src="/envelope.png"
                                alt="smartphone"
                                width={25}
                                height={25}
                            />
                            <span className="ml-2">britnikengineering@gmail.com</span>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="lg:flex w-[50vw] lg:w-[80vw] flex-col text-white lg:text-black">
                            <div className="flex pt-8 justify-around">
                                <div className=" hidden lg:block text-2xl">
                                    <Link href="/">Britnik Engineering</Link>
                                </div>
                                <div className="lg:ml-auto text-xl">
                                    <Link href="/">Home</Link>
                                </div>
                                <div
                                    className="lg:ml-[4rem] text-xl border-b border-white lg:border-black"
                                >
                                    About Us
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center w-[90vw]">
                    <h1 className="text-4xl font-bold mb-8 mt-8">About Us</h1>
                    <div>
                        <Image src="/truck.jpeg" alt="truck" height={500} width={700} />
                    </div>
                    <div className="mb-8 mt-8 font-thin text-xl max-w-[700px]">
                        We service and repair Modern Cars; Mini Trucks, Sports Utility
                        Vehicles and Saloons. We are a company with experience in Planning,
                        Repairing, Testing, Executing Projects and Carrying out Consultancy
                        services in Automotive Engineering.{" "}
                    </div>
                    <div className="mb-24 mt-4 font-thin text-xl max-w-[700px]">
                        We have a management team of COREN, NSE, NImechE, AutoEI Certified
                        Professional Mechanical Engineers, Auto Rewires, Auto Air
                        Conditioning Technicians and Panel Beaters all working together to
                        achieve our goal to provide technologically advanced services, while
                        complying with both local and international regulations such as the
                        API – American Petroleum Institute, SAE institute.
                    </div>
                </div>
                <footer className="h-20 w-screen bg-blue-500 flex justify-center items-center">
                    <div className="text-lg text-white">
                        {" "}
                        Copyright © 2022 Britnik Engineering.
                    </div>
                </footer>
            </div>
        </div>
    );
}
