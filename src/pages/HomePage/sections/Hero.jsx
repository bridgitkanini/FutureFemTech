import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div><header
            className="flex items-center text-white text-center min-h-[60vh] md:min-h-screen"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(92, 77, 66, 0.6), rgba(92, 77, 66, 0.6)), url('src/assets/hero-img.jpg')`,
                backgroundSize: 'cover',
            }}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <div className="max-w-2xl">
                        <h1 className="text-xl md:text-5xl font-bold px-2">
                            Unlock the Future with STEM - Personalized Just for You!
                        </h1>
                        <hr className="border-t-2 border-white w-24 mx-auto my-4" />
                        <p className="text-base md:text-xl px-2">
                            Empowering the next generation of girls in STEM through personalized learning paths that adapt to
                            your passions, pace, and progress.
                        </p>
                        <Link
                            className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg text-base md:text-lg"
                            to="/career-form"
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