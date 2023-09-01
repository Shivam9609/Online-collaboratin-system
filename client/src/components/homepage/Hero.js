import React from 'react'
import hero_1 from '../../assets/hero_1.webp'
import { v4 } from 'uuid'
const Hero = () => {
    const room = v4()
    function createRoom() {
        window.location.href = `/room/${room}`
        window.localion.redirect(`/room/${room}`)

    }


    return (
        <>
                <section className="text-gray-600 body-font font-rubik">
                    <div className="container mx-auto flex px-48 py-10 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" style={{ fontFamily: 'Rubik' }}>CONNECT YOUR REMOTE
                                <br className="hidden lg:inline-block" />TEAM AND SAVE TIME
                            </h1>
                            <p className="mb-8 leading-relaxed">Unlimited access to screen sharing, video calls, and more.</p>
                            {/* <HiChevronDoubleRight /> */}
                            <div className="flex justify-center">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Learn More</button>
                                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" onClick={createRoom}>Join Room</button>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img className="object-cover object-center rounded" alt="hero" src={hero_1} />
                        </div>
                    </div>
                </section>
              
        </>
    )
}

export default Hero