import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchProductByCategoryAction,
  activeMenuAction,
} from "../store/actions/product";

const Menu = () => {
    const [menus] = useState(["All", "T-Shirts", "Pants", "Shoes"]);
    const dispatch = useDispatch();

    const activeMenu = useSelector((state) => state.product.active);

    const handleChangeMenu = (category) => {
        dispatch(fetchProductByCategoryAction(category));
        dispatch(activeMenuAction(category));
    };

    return (
        <div className="flex overflow-hidden bg-white pt-16">
        <aside
            id="sidebar"
            className="fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
            aria-label="Sidebar"
        >
            <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex-1 px-3 bg-white divide-y space-y-1">
                <ul className="space-y-2 pb-2">
                    {menus.map((menu, index) => (
                    <li key={index}>
                        <a
                        href="#"
                        className={`
                                    text-base 
                                    text-gray-900 
                                    font-normal 
                                    flex 
                                    items-center 
                                    p-2 
                                    hover:bg-gray-100 
                                    group
                                    ${activeMenu === menu ? "bg-gray-100" : ""}
                                    `}
                        >
                        <svg
                            className="h-5 w-5 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                            />
                        </svg>

                        <span
                            className="ml-2 cursor-pointer"
                            onClick={() => handleChangeMenu(menu)}
                        >
                            {menu}
                        </span>
                        </a>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            </div>
        </aside>
        </div>
    );
};

export default Menu;
