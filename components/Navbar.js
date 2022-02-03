import Image from "next/image";
export default function Navbar() {
    return (
        <div className="flex justify-center relative z-10">
            <div style={{ border: "1px solid red" }} className="flex w-[80vw] flex-col">
                <div  className="flex p-3">
                    <div className="mr-5 flex items-center">
                        <Image
                            src="/mobile-phone.png"
                            alt="smartphone"
                            width={25}
                            height={25}
                        />
                     
                        <span className="ml-2">09082183969</span>
                    </div>
                    <div className="mr-5 flex items-center">
                        <Image
                            src="/location.png"
                            alt="smartphone"
                            width={25}
                            height={25}
                        />
                        <span className="ml-2">30 Ayepe Zone A, New Ife Road, Ibadan</span>
                    </div>
                    <div className="mr-5 flex items-center">
                        <Image
                            src="/envelope.png"
                            alt="smartphone"
                            width={25}
                            height={25}
                        />
                        <span className="ml-2">britnikengineering@gmail.com</span>
                    </div>
                </div>
                <div className="flex pt-8 justify-end">
                    <div className="text-2xl" >Britnik Engineering</div>
                    <div className="ml-auto text-xl text-slate-800">Home</div>
                    <div className="ml-[4rem] text-xl">About Us</div>
                </div>
            </div>
        </div>
    );
}
