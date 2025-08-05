
import profileImage from "../assets/images/profile.jpeg"

const Sidebar = () => {
    return (
        <div className="flex flex-col h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white p-6 sticky top-0 overflow-y-auto">
            {/* Profile Section */}
            <div className="flex flex-col items-center mb-8">
                <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden mb-4">
                    <img
                        src={profileImage}
                        className="w-full h-full object-cover"
                    />
                </div>
                <h1 className="text-xl font-bold mb-1">Deepak Singh</h1>
                <p className="text-indigo-200 text-sm mb-4">Software Engineer</p>
                <p className="text-center text-sm text-gray-300">
                    Passionate about solving complex problems and building scalable applications
                </p>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4 border-b border-indigo-400 pb-2">Contact</h2>
                <div className="space-y-3">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-indigo-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href="tel:+1234567890" className="text-sm hover:text-indigo-200 transition">+91 7817952574</a>
                    </div>
                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-indigo-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:your.email@example.com" className="text-sm hover:text-indigo-200 transition">deepak74singh17@gmail.com</a>
                    </div>
                </div>
            </div>

            {/* Coding Profiles */}
            <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4 border-b border-indigo-400 pb-2">Coding Profiles</h2>
                <div className="grid grid-cols-2 gap-3">
                    <a
                        href="https://github.com/DEEPAKsingh74"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm p-2 rounded hover:bg-indigo-800 transition"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        GitHub
                    </a>
                    <a
                        href="https://leetcode.com/burpdeepak96"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm p-2 rounded hover:bg-indigo-800 transition"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                        </svg>
                        LeetCode
                    </a>
                    <a
                        href="https://codeforces.com/profile/burpdeepak96"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm p-2 rounded hover:bg-indigo-800 transition"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
                        </svg>
                        Codeforces
                    </a>
                    <a
                        href="https://www.codechef.com/users/burpdeepak96"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm p-2 rounded hover:bg-indigo-800 transition"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM1.5 10.5a9 9 0 1 1 18 0 9 9 0 0 1-18 0zm18-4.5v4.5h-4.5v-1.5h3a6.75 6.75 0 0 0-6.75-6.75V1.5a9 9 0 0 1 9 9h1.5V6z" />
                        </svg>
                        CodeChef
                    </a>
                    <a
                        href="https://www.geeksforgeeks.org/user/burpdeepak96/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm p-2 rounded hover:bg-indigo-800 transition"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm12 4a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1zM8 7a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1zm4 3a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4z" />
                        </svg>
                        GFG
                    </a>
                    <a
                        href="https://www.linkedin.com/in/deepak-bisht-s74/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm p-2 rounded hover:bg-indigo-800 transition"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                    </a>
                </div>
            </div>

            {/* Download Resume */}
            <a
                href="https://github.com/DEEPAKsingh74/resume/blob/main/Deepak_resume_mnc.pdf"  // <-- Replace with the actual path or external link
                download
                className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center"
            >
                Download Resume
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
            </a>

        </div>
    );
};

export default Sidebar;