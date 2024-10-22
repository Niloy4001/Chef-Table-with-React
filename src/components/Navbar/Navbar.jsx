
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
    return (
        <div className="py-5 lg:py-[50px]">
            <div className="navbar flex justify-between bg-base-100">
                <div className="flex">
                    <h1 className="text-xl lg:text-[32px] font-bold text-[#150B2B] ">Recipe Calories</h1>
                </div>
                <div>
                    <ul className="hidden md:flex items-center lg:gap-8 text-base font-normal text-[#150B2BB3]/[0.7]">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Recipes</li>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Search</li>
                    </ul>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <label className="input hidden md:flex items-center gap-2 rounded-full border border-black/[0.5]  border-solid">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input type="text" className="grow" placeholder="Search" />
                        </label>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full bg-[#0BE58A]">
                            <div className="h-full flex justify-center items-center"><CgProfile /></div>
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;