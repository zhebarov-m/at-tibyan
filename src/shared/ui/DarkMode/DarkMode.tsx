import {HiSun, HiMoon} from "react-icons/hi";
import {useEffect, useState} from "react";

const DarkMode = () => {
    const [theme, setTheme] = useState('light')
    const element = document.documentElement

        useEffect(() => {
            if (theme === 'dark') {
                element.classList.add('dark')
            } else {
                element.classList.remove('dark')
            }
        }, [theme]);

    function onToggleTheme() {
        switch (theme) {
            case 'light':
                setTheme('dark')
                break;
            case 'dark':
                setTheme('light')
        }
    }

    return (
        <div
            className="p-2 text-3xl size-10 flex justify-center items-center rounded-3xl cursor-pointer dark:bg-gray-700">
            <button onClick={onToggleTheme}>{theme === 'light' ? <HiSun className="text-yellow-500"/> :
                <HiMoon className="text-blue-500"/>}</button>
        </div>
    );
};

export default DarkMode;
