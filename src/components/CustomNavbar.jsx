import React from 'react'
import {
    Link
  } from "react-router-dom";

function CustomNavbar() {
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/" class="mr-5 hover:text-gray-900 font-bold">About</Link>
                    <Link to="/Skills" class="mr-5 hover:text-gray-900 font-bold">Skills</Link>
                    <Link to="/Contact" class="mr-5 hover:text-gray-900 font-bold">Contact</Link>
                </nav>
            </div>
        </header>
    )
}

export default CustomNavbar