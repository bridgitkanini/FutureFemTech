import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div><header
            className="flex items-center text-white text-center"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(92, 77, 66, 0.6), rgba(92, 77, 66, 0.6)), url('src/assets/hero-img.jpg')`,
                backgroundSize: 'cover',
                minHeight: '100vh',
            }}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <div className="max-w-2xl">
                        <h1 className="text-2xl md:text-5xl font-bold">
                            Unlock the Future with STEM - Personalized Just for You!
                        </h1>
                        <hr className="border-t-2 border-white w-24 mx-auto my-4" />
                        <p className="text-lg md:text-xl">
                            Empowering the next generation of girls in STEM through personalized learning paths that adapt to
                            your passions, pace, and progress.
                        </p>
                        <Link
                            className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg text-lg"
                            to="/"
                        >
                            Discover Your Career Path
                        </Link>
                    </div>
                </div>
            </div>
        </header>
        </div>
    )
}

export default Hero