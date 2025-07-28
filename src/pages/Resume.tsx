import React, { useState, useEffect } from 'react';

const ResumePage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Replace with your actual resume URL (PDF recommended)
    const resumeUrl = "https://github.com/DEEPAKsingh74/resume/raw/main/Deepak_resume_mnc.pdf";


    useEffect(() => {
        // Simulate loading (remove in production)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                

                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    {/* PDF Viewer Section */}
                    <div className="relative h-[100vh]">
                        {isLoading ? (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                            </div>
                        ) : error ? (
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <div className="text-center">
                                    <p className="text-red-500 text-lg">{error}</p>
                                    <button
                                        onClick={handleDownload}
                                        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Download Resume Instead
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <iframe
                                src={`https://docs.google.com/viewer?url=${encodeURIComponent(resumeUrl)}&embedded=true`}
                                title="Resume Viewer"
                                className="w-full h-full"
                                onError={() => {
                                    setError("Failed to load resume preview");
                                    setIsLoading(false);
                                }}
                                onLoad={() => setIsLoading(false)}
                            />
                        )}
                    </div>

                    {/* Download Button */}
                    <div className="bg-gray-50 px-6 py-4 flex justify-end">
                        <button
                            onClick={handleDownload}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            Download PDF
                        </button>
                    </div>
                </div>

                {/* Alternative for mobile (optional) */}
                <div className="mt-4 text-center sm:hidden">
                    <p className="text-sm text-gray-500">Having trouble viewing? Try downloading instead.</p>
                </div>
            </div>
        </div>
    );
};

export default ResumePage;