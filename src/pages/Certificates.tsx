const CertificatePage = () => {
  const certifications = [
    {
      id: 1,
      title: "Cipherthon 2.0 - Gen AI hackathon",
      issuer: "Cipher Schools",
      date: "June 2024",
      credentialId: "CT2_1702107",
      image: "/images/cipherthon.webp",
      link: "https://drive.google.com/file/d/1Yl7O7r8rDB0chFmb7FvpUSRrWFzBTLUh/view?usp=sharing"
    },
    {
      id: 2,
      title: "Data Structure & Algorithm - Cipher Schools",
      issuer: "Cipher Schools",
      date: "February 2023",
      credentialId: "CS2023-9301",
      image: "/images/cipherthon.webp",
      link: "https://drive.google.com/file/d/18UrnfbE-_nBuTm00QSG51VuuuIyLqzK2/view?usp=drive_link"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">My Certifications</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional certifications that validate my expertise and commitment to continuous learning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <div 
            key={cert.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <img 
                  src={cert.image} 
                  alt={`${cert.issuer} certification badge`}
                  className="h-24 w-24 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{cert.title}</h3>
              <div className="text-gray-600 mb-1">
                <span className="font-medium">Issuer:</span> {cert.issuer}
              </div>
              <div className="text-gray-600 mb-1">
                <span className="font-medium">Date Earned:</span> {cert.date}
              </div>
              <div className="text-gray-600 mb-4">
                <span className="font-medium">Credential ID:</span> {cert.credentialId}
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CertificatePage;