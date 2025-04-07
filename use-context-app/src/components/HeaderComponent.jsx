import React from 'react'

import logo from "../assets/images/logo.svg"
import light from "../assets/images/icon-sun.svg"
import dark from "../assets/images/icon-moon.svg"

import { useTheme } from './ThemeProvider'



function HeaderComponent() {
    const { darkTheme, toggleTheme } = useTheme()
    return (
        <div className='flex flex-row bg-white mt-10 px-4 py-3 h-auto sm:h-15 items-center justify-between rounded-xl shadow-md dark:border-2 dark:border-gray-100'>
            {/* extensions */}
            <div>
                <img src={logo} alt="image" />
            </div>
            {/* theme changer */}
            <div >
                <button onClick={toggleTheme} className='bg-green-500 h-10 w-10 flex items-center justify-center rounded-xl'>
                    {
                        darkTheme ? (<img src={dark} />) : <img src={light} />
                    }
                </button>
            </div>
        </div>
    )
}

export default HeaderComponent


