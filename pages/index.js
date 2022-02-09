import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from 'framer-motion'
export default function Home() {
  useEffect(() => {
    const burger = document.getElementById("burger");
    const secondBurger = document.getElementById("burger2");
    const menu = document.getElementById("menu");
    burger.addEventListener("click", () => {
      if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
      } else {
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
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: '10vh'
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring', delay: 0.5, duration: 3
      }
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut'
      }
    }
  }
  const subHeaderVariants1 = {
    hidden: {
      opacity: 0,
      y: '10vh'
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring', delay: 1, duration: 3
      }
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut'
      }
    }
  }
  const subHeaderVariants2 = {
    hidden: {
      opacity: 0,
      y: '10vh'
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring', delay: 1.5, duration: 3
      }
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div>
      <div className="bg-image text-white">
        <div className="bg-image-overlay flex flex-col justify-center">
          <div id="showBg" className="flex flex-col pb-4">
            <div className=" lg:hidden self-end mr-8 cursor-pointer">
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
                  fill="none"
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
            <div className="flex justify-center">
              <div id="menu" className="hidden lg:flex lg:w-[80vw] flex-col">
                <div className=" flex flex-col items-center lg:flex-row p-3">
                  <div className="mb-5 lg:mb-0 mr-5 flex items-center">
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
                    <span className="ml-2">
                      30 Ayepe Zone A, New Ife Road, Ibadan
                    </span>
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
                <div className="flex pt-8 justify-around">
                  <div className="hidden lg:block text-2xl">
                    Britnik Engineering
                  </div>
                  <div
                    className="lg:ml-auto text-xl border-b border-white "
                  >
                    Home
                  </div>
                  <div className="lg:ml-[4rem] text-xl">
                    <Link href="/about">About Us</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-auto text-center">
            <motion.div
              variants={headerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-4xl sm:text-5xl md:text-6xl mb-5 font-bold">
              Britnik Engineering
            </motion.div>
            <motion.div
              variants={subHeaderVariants1}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mb-6">An Automobile Engineering Company </motion.div>
            <motion.button
              variants={subHeaderVariants2}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="pl-4 pr-4 pt-2 pb-2 sm:pl-16 sm:pr-16 sm:pt-4 sm:pb-4 rounded bg-white text-blue-500 text-base font-bold">
              <Link href="/about">VIEW SERVICES</Link>
            </motion.button>
          </div>
        </div>
      </div>
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        exit="exit"
        className="flex flex-col items-center">
        <div className="text-4xl font-bold text-center mt-8">Who We Are?</div>
        <div className="w-[80vw] grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-16">
          <div className="text-center">
            <Image
              src="/maintenance.png"
              height={100}
              width={100}
              alt="maintnance"
            />
            <div className="font-bold text-xl mb-2">WE&apos;RE EXPERTS</div>
            <div className="font-thin text-lg">
              We have over 10 years of repairing Automobile vehicles using
              advanced Mechatronics technologies
            </div>
          </div>
          <div className="text-center">
            <Image
              src="/friends.png"
              height={100}
              width={100}
              alt="maintnance"
            />
            <div className="font-bold text-xl mb-2">WE&apos;RE FRIENDLY</div>
            <div className="font-thin text-lg">
              Our Customers are at the heart of our organization. Our customers
              love us because we love their vehicles
            </div>
          </div>
          <div className="text-center">
            <Image src="/car.png" height={100} width={100} alt="maintnance" />
            <div className="font-bold text-xl mb-2">WE&apos;RE TRUSTED</div>
            <div className="font-thin text-lg">
              Our Customers are loyal because we are Trustworthy
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        exit="exit"
        className="flex justify-center bg-gray-100">
        <div className="sm:w-[80vw] p-16 grid lg:grid-cols-2  gap-4">
          <div className="mb-8">
            <div className="text-4xl font-bold">Our Services</div>
            <div className="font-thin text-lg mb-8">
              We service and repair Modern Cars; Mini Trucks, Sports Utility
              Vehicles and Saloons. We are a company with experience in
              Planning, Repairing, Testing, Executing Projects and Carrying out
              Consultancy services in Automotive Engineering. We have a
              management team of COREN, NSE, NImechE, AutoEI Certified
              Professional Mechanical Engineers, Auto Rewires, Auto Air
              Conditioning Technicians and Panel …
            </div>
            <button className="bg-white pl-6 pr-6 pt-3 pb-3 rounded border border-blue-500 text-blue-500 font-bold">
              <Link href="/about"> READ MORE</Link>
            </button>
          </div>
          <Image src="/truck.jpeg" alt="car" height={500} width={700} />
        </div>
      </motion.div>
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        exit="exit"
        className="flex flex-col justify-center p-6 sm:p-24">
        <div className="text-4xl font-bold text-center mb-4">Clients Testimonials</div>
        <p className="text-xl text-center font-thin mb-8">Read the reviews from many of our happy clients</p>
        <div className="sm:w-[80vw] grid lg:grid-cols-2  gap-8 ">
          <div>
            <div className="border pl-16 pr-16 pt-8 pb-8 text-lg font-thin break-words">
              Wow! what a great service, I love it! Keep up the excellent work.
              I got this company for one client of mine, the car has been
              alright ever since.
            </div>
            <div className="ml-8 mt-4">
              <div className="font-bold text-xl">Rilwan Olanrewaju</div>
              <div className="text-xl">CEO, Tasco Limited</div>
            </div>
          </div>
          <div>
            <div className="border pl-16 pr-16 pt-8 pb-8 text-lg font-thin break-words">
              <div>
                {" "}
                I spent an abnormal amount of time searching for the right
                engineer. I contacted support and got a message back very
                quickly when i had a problem. Thank you{" "}
              </div>
            </div>
            <div className="ml-8 mt-4">
              <div className="font-bold text-xl">David Ugwu</div>
              <div className="text-xl">Owner, Toyota Corolla</div>
            </div>
          </div>
          <div>
            <div className="border pl-16 pr-16 pt-8 pb-8 text-lg font-thin break-words">
              Well done to Britnik Engineering team for their timely service. I
              highly recommend it. Great cutomer service and quality repair
            </div>
            <div className="ml-8 mt-4">
              <div className="font-bold text-xl">Kemi Otunba</div>
              <div className="text-xl">Owner, Ford Endeavour</div>
            </div>
          </div>
          <div>
            <div className="border pl-16 pr-16 pt-8 pb-8 text-lg font-thin break-words">
              Britnik engineers use modern approach towards car diagnosis and
              repair. They have become our consultant.
            </div>
            <div className="ml-8 mt-4">
              <div className="font-bold text-xl">Olusola Aiyeola</div>
              <div className="text-xl">CEO, Amazing Motors</div>
            </div>
          </div>
        </div>
      </motion.div>
      <footer className="h-20 w-screen bg-blue-500 flex justify-center items-center">
        <div className="text-lg text-white">
          {" "}
          Copyright © 2022 Britnik Engineering.
        </div>
      </footer>
    </div>
  );
}
