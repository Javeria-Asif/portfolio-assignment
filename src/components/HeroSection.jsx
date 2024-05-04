import React from 'react'
import MyPic from './images/Pic.jpeg'

function HeroSection() {
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Hi👋🏻
                        <div class="hidden lg:block">I'm Javeria Asif, <br />
                            Front-end Developer </div>
                    </h1>
                    <p class="mb-8 leading-relaxed">I design and develop experiences that make people's lives
                        simpler through Web and Mobile apps. I work with Figma,
                        HTML5, CSS3, Javascript, React, Bootstrap, and Tailwind CSS</p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-black-600 rounded text-lg">Hire Me</button>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 hover:text-white rounded text-lg">See My Projects</button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded" alt="hero" src={MyPic}></img>
                </div>
            </div>
        </section>
    )
}

export default HeroSection