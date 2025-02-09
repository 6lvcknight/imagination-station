import React from 'react'

export const Footer = () => {
  return (
    <footer className="w-full p-4 bg-gradient-to-b from-yellow-200 to-white shadow-sm p-4 md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 
            <a href="/" className="hover:underline"> Imagination Station™</a>. 
            All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="#" class="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
    </footer>
  )
}
