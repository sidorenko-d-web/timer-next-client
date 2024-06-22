import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHandFist, faHome, faTrophy, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { NavigateItem } from "./NavigateItem";

export const Navigate = () => {
    return (
        <nav className=" hidden md:block absolute z-50 w-16 py-12 px-4 h-[100svh] bg-dark-gray-bg hover:w-[230px] transition-all overflow-hidden">
            <ul className="flex flex-col justify-between h-full items-start">
                <div className="flex flex-col gap-6 items-start">
                    <li className="hover:border-l-8 border-green-600 active:text-green-600  hover:pl-4 transition-all">
                        <NavigateItem icon={faHome} value="Home" />
                    </li>
                    <li className="hover:border-l-8  mt-12 border-green-600 active:text-green-600  hover:pl-4 transition-all">
                        <NavigateItem icon={faTrophy} value="Contest" />
                    </li>
                    <li className="hover:border-l-8 border-green-600 active:text-green-600  hover:pl-4 transition-all">
                        <NavigateItem icon={faHandFist} value="Battle" />
                    </li>
                    <li className="hover:border-l-8 border-green-600 active:text-green-600  hover:pl-4 transition-all">
                        <NavigateItem icon={faUserGroup} value="Friends" />
                    </li>
                </div>
                <li className="hover:border-l-8 hover:pl-4 border-green-600 active:text-green-600 transition-all">
                    <button className="flex items-end text-xl gap-8">
                        <NavigateItem icon={faGear} value="Settings" />
                    </button>
                </li>
            </ul>
        </nav>
    )
}
