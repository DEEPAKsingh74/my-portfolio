import { resumeUrl } from "../data/constants"

const AboutPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">


                {/* Introduction Text */}
                <div className="order-1 md:order-2">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Hi, I'm <span className="text-indigo-600">[Deepak Singh Bisht]</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6">
                        [Computer Science] | [Software Engineer]
                    </h2>

                    <div className="prose prose-lg text-gray-600 mb-8">
                        <p className="mb-4">
                            I am a passionate developer with a strong foundation in full-stack development. Over the years, I have gained hands-on experience building dynamic, scalable web applications using modern frameworks and tools. I thrive in collaborative environments where continuous learning and innovation are encouraged.
                        </p>
                        <p className="mb-4">
                            I enjoy working with cutting-edge web technologies and have a deep interest in solving real-world problems through code. Whether it's optimizing backend performance, designing intuitive user interfaces, or integrating APIs, I find fulfillment in creating solutions that are both functional and user-friendly.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="mailto:deepak74singh17@gmail.com"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            Contact Me
                        </a>
                        <a
                            href={resumeUrl}
                            className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            View Resume
                        </a>
                    </div>
                </div>
            </div>

            {/* Skills/Technologies Section */}
            <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                    Technologies I Work With
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[
                        'React', 'TypeScript', 'Node.js',
                        'Tailwind CSS', 'Python', 'NextJs',
                        'C++', 'C', 'Javascript', 'Java', 'Object Oriented Programming', 'Low-level Design (LLD)', 'Operating System(OS)', 'Docker', 'Rest API',
                        'MongoDB', 'PostgreSQL', 'Git'
                    ].map((tech) => (
                        <div
                            key={tech}
                            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                        >
                            <div className="text-indigo-600 font-medium">{tech}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutPage