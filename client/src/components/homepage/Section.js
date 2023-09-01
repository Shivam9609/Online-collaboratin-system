import React from 'react'
import headphones from '../../assets/headphones.png'
import ScreenShare from '../../assets/screensharing.png'
import Chat from '../../assets/chat.png'
const Section = () => {
    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 style={{ fontSize: 30 }} className="sm:text-3xl text-3xl font-medium title-font mb-4 text-white">Check Out All Features</h1>
                        <p style={{ fontSize: 20 }} className="lg:w-2/3 mx-auto leading-relaxed text-base">As companies fully transition to online operations and remote work, virtual collaboration software has become must-have tools.</p>
                    </div>
                    <div className="flex flex-wrap -m-3 text-center">

                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                            <img className='mx-auto my-auto' src={headphones} alt='video-calling-logo' />
                                <h2 className="title-font font-medium text-xl text-white">Video and HD Calling Features</h2>
                                <p className="leading-relaxed">Real Time Meeting, using your browser</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                            <img className='mx-auto my-auto' width={40} height={40} src={ScreenShare} alt='video-calling-logo' />

                                <h2 className="title-font font-medium text-xl text-white">Screen Sharing</h2>
                                <p className="leading-relaxed">Real Time screen sharing without any lag</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                            <img className='mx-auto my-auto' src={Chat} alt='video-calling-logo' />

                                <h2 className="title-font font-medium text-xl text-white">Smart Messaging</h2>
                                <p className="leading-relaxed">Real time room based chat system.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section