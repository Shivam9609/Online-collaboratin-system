import React from 'react'
import img_2 from '../../assets/img_4.webp'
const WhyChooseUs = () => {
    return (
        <>
            <section className="text-gray-600 bg-sky-100 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-center text-4xl font-bold text-sky-900 mb-6">Why Choose Us?</h1>
                    <p className="text-center text-gray-600 mb-8">Weather you are collaborating, discussing for project or just chillin with friends, we are here to help!!!</p>
                    <div className='flex flex-row px-40 justify-center items-center'>

                        <div className="flex flex-col sm:flex-row flex-wrap mr-10">
                            <img src={img_2} className="rounded-md" alt="img_2" width={450} height={337.5} />
                        </div>
                        <div className="flex flex-col justify-center items-center sm:flex-row flex-wrap px-40">
                            <ul className="flex flex-col sm:flex-column flex-wrap">
                                <li className='pb-8 text-xl font-semibold'> Video Meetings</li>
                                <li className='pb-8 text-xl font-semibold'>Enhanced Audio</li>
                                <li className='pb-8 text-xl font-semibold'>Screen Sharing</li>
                                <li className='pb-8 text-xl font-semibold'>Room based Chatting</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChooseUs