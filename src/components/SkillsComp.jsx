import React from 'react'

function SkillsComp() {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="text-2xl font-bold title-font mb-4 text-gray-900">Professional Skillset</h1>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 lg:w-1/4 md:w-1/2">
                        <div class="h-full flex flex-col items-center text-center bg-black ">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4" src="https://sumaim-portfolio.netlify.app/static/media/HTML.2a0726d4fe4b3c6bf2c4849555884c79.svg"></img>

                        </div>
                    </div>
                    <div class="p-4 lg:w-1/4 md:w-1/2">
                        <div class="h-full flex flex-col items-center text-center bg-black">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4" src="https://sumaim-portfolio.netlify.app/static/media/CSS.649797c60cf40e59aef5dc80525a46d6.svg"></img>

                        </div>
                    </div>
                    <div class="p-4 lg:w-1/4 md:w-1/2">
                        <div class="h-full flex flex-col items-center text-center bg-black">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-full  object-cover object-center mb-4" src="https://sumaim-portfolio.netlify.app/static/media/JS.b1994be06206366796eedb8054671898.svg"></img>

                        </div>
                    </div>
                    <div class="p-4 lg:w-1/4 md:w-1/2">
                        <div class="h-full flex flex-col items-center text-center bg-black">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4" src="https://sumaim-portfolio.netlify.app/static/media/React.10d51fa95397ee683fbb40a78e83bcfc.svg"></img>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsComp