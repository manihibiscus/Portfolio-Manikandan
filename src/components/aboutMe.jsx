export const AboutMe = () => {
  return (
    <>
      <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-8 max-w-2xl ">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-center lg:mt-[75px]">About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/3">
          <img
            src="./imageMani.jpg"
            alt="Your Name"
            className="w-full rounded-full shadow-md mb-6 md:mb-0"
          />
        </div>
        <div className="md:w-2/3 md:pl-6">
          <p className="text-gray-600 text-sm md:text-lg mb-4">
            Hello! I'm Mainkandan S, a Full Stack Developer with a passion for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I strive to build seamless and efficient solutions that provide a great user experience.
          </p>
          <p className="text-gray-600 text-sm md:text-lg mb-4">
            I have experience working with a variety of programming languages and frameworks, including JavaScript, React, Node.js, and more. 
            I'm always eager to learn new technologies and take on new challenges.
          </p>
          <p className="text-gray-600 text-sm md:text-lg">
            In my spare time, I enjoy exploring the latest trends in technology, contributing to open-source projects, and connecting with fellow developers. Let's build something amazing together!
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
