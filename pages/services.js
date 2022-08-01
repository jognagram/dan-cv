import { GiCardboardBox } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineBlock } from "react-icons/ai";
import { Element } from "react-scroll";

function services() {
    return(
        <Element id="services" name="services">
            <div className="w-full my-40 h-auto flex-col justify-center items-center">
                <p className="text-sm uppercase text-gray-400">My Skills</p>
                <h1 className="text-indigo-900 text-6x1 font-bold text-center">
                    The technologies I use
                </h1>

                <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex  flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
                        <GiCardboardBox className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								Flutter & Firebase
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
                        FlutterFirebase is a set of Flutter plugins that enable Flutter apps to use Firebase services. 
						</p>
					</div>

                    {/* second block */}
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center cursor-pointer">
                        <HiColorSwatch className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                        <h2 className="text-x1 text-indigo-600 font-semibold">
                            Javascript
                        </h2>
                        </div>
                        <p className="md:text-base text-gray-400 md:text-center sm:text-sm sm:text-left">
                        JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
						</p>
                    </div>
                </div>

                {/* second grid */}
                <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
                    <div className="flex flex-col justify-center items-center">
                        {/*first block*/} 
                        <div className="flex justify-center items-center cursor-pointer">
							<AiOutlineBlock className="w-10 h-10 bg-green-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold ">
								Python & Django
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
                        Django is a free and open-source full-stack web application 
                        framework based on Python.
						</p>
                    </div>

                    {/* second block */}
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center cursor-pointer">
                        <MdDeveloperBoard className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                        <h2 className="text-xl text-indigo-600 font-semibold">
                            Html & Css
                        </h2>
                        </div>
                        <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
                        HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of 
                        the core technologies for building Web pages.
						</p>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default services;