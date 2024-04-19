import React from 'react'
import { IoIosNotifications } from 'react-icons/io'
import { Dropdown } from 'flowbite-react'

const Navbar = () => {
    return (
        <nav className="w-full mx-auto bg-white px-8 sticky top-0 z-30 backdrop-blur-md bg-white/70 md:border-0 shadow-sm py-8">
            <div className="max-w-screen-xl flex flex-wrap w-full items-center justify-between mx-auto">
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="float-right flex flex-col p-4 md:p-0 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800">
                        <li className="flex align-items-center">
                            <Dropdown inline label="Dropdown" arrowIcon={true}>
                                <Dropdown.Item>Dashboard</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>Earnings</Dropdown.Item>
                                <Dropdown.Item>Sign out</Dropdown.Item>
                            </Dropdown>
                        </li>
                        <li className="flex align-items-center">
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:hover:scale-125 md:dark:hover:scale-115 transition ease-in-out dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Services
                            </a>
                        </li>
                        <li className="flex align-items-center">
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:hover:scale-125 md:dark:hover:scale-115 transition ease-in-out dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Pricing
                            </a>
                        </li>
                        <li className="flex align-items-center">
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:hover:scale-125 md:dark:hover:scale-115 transition ease-in-out dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-2">
                    <Dropdown
                        inline
                        label={<IoIosNotifications size={24} />}
                        arrowIcon={false}
                    >
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
