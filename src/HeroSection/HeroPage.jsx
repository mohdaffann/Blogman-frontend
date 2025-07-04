import { ChevronsRight, User2Icon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
function HeroPage() {
    return (
        <div className="w-full flex flex-col p-8 gap-8 mt-5 min-h-screen">
            <div className="text-center">
                <h1 className="text-4xl text-black font-black ">
                    Articulo
                </h1>
                <p className="text-gray-800 italic text-xl">
                    "Every word matters."
                </p>
                <div className="flex items-center justify-center space-x-6 mt-5">
                    <Link className="flex items-center px-2.5 py-1.5 rounded-[5px]  duration-200  text-gray-900 border-2 border-gray-900 transition ease-in-out hover:bg-gray-900 hover:text-white"
                        to={'/login'}
                    >
                        <User2Icon />
                        Login

                    </Link>
                    <Link className="flex items-center px-2.5 py-1.5 rounded-[5px]  duration-200 text-gray-900 border-2 border-gray-900 transition ease-in-out hover:bg-gray-900 hover:text-white"
                        to={'/home'}
                    >
                        Explore
                        <ChevronsRight />
                    </Link>
                </div>
                <div className="mt-6 mb-6 border-b-2 border-b-gray-900 max-w-[400px] mx-auto">
                    <span className="text-gray-700 font-semibold text-3xl">Features</span>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 max-w-4xl md:grid-cols-2 md:gap-6  mx-auto">

                <div className="flex-1 max-w-[450px] w-[400px] bg-white rounded-lg shadow-md transition ease-in-out cursor-pointer duration-300 hover:shadow-lg flex p-6 gap-4 items-center">
                    <img src="https://res.cloudinary.com/dfmtemqoz/image/upload/v1751209664/inks_10501275_zxcsvh.png"
                        className="object-contain h-28 w-28  shrink-0"
                    />
                    <div className=" flex flex-col gap-2 ">
                        <div className="mb-2">
                            <span className="text-xl font-semibold text-gray-800">Ink it.</span>

                        </div>
                        <span className="text-gray-700">Write personalized articles</span>
                        <span className="text-gray-700">Upload images</span>
                        <span className="text-gray-700">Write code</span>
                        <span className="text-gray-700">Choose a category</span>
                    </div>
                </div>
                <div className="max-w-[450px] w-[400px]  bg-white rounded-lg shadow-md transition duration-300 cursor-pointer ease-in-out hover:shadow-lg flex p-6 gap-4 items-center ">
                    <img src="https://res.cloudinary.com/dfmtemqoz/image/upload/v1751209664/follow_9238353_qffwlx.png" className="object-contain h-28 w-28  shrink-0" />
                    <div className=" flex flex-col gap-2">
                        <div className="mb-2">
                            <span className="text-xl font-semibold text-gray-800">Follow</span>
                        </div>

                        <span className="text-gray-700">Find users</span>
                        <span className="text-gray-700">Follow users</span>
                        <span className="text-gray-700">Unfollow users</span>
                        <span className="text-gray-700">Get follow lists</span>
                    </div>
                </div>
                <div className="max-w-[450px] w-[400px]  bg-white rounded-lg shadow-md transition duration-300 cursor-pointer ease-in-out hover:shadow-lg flex p-6 gap-4 items-center">
                    <img src="https://res.cloudinary.com/dfmtemqoz/image/upload/v1751209664/compose_18311539_b8yefd.png" className="object-contain h-28 w-28  shrink-0" />
                    <div className="flex flex-col gap-2">
                        <div className="mb-2">
                            <span className="text-xl font-semibold text-gray-800">Own what you own</span>
                        </div>

                        <span className="text-gray-700">Post comments</span>
                        <span className="text-gray-700">Edit comments</span>
                        <span className="text-gray-700">Delete comments</span>
                    </div>
                </div>
                <div className="max-w-[450px] w-[400px] bg-white rounded-lg shadow-md transition duration-300 cursor-pointer ease-in-out hover:shadow-lg flex p-6 gap-4 items-center">
                    <img src="https://res.cloudinary.com/dfmtemqoz/image/upload/v1751209664/filter-browser_17252861_hblrlt.png" className="object-contain h-28 w-28  shrink-0" />
                    <div className="flex flex-col gap-2">
                        <div className="mb-2">
                            <span className="text-xl font-semibold text-gray-800"> Pick from the Abyss</span>
                        </div>

                        <span className="text-gray-700">Search Articles</span>
                        <span className="text-gray-700">Sort by Category filters</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HeroPage;
