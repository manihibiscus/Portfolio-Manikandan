const ContactForm = () => {
  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-8 max-w-6xl">
      <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-6 text-center lg:mt-[75px]">Contact Me</h2>
      <form className="grid gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-600 text-sm md:text-lg font-semibold mb-2">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-600 text-sm md:text-lg font-semibold mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-600 text-sm md:text-lg font-semibold mb-2">Message</label>
          <textarea 
            id="message" 
            name="message" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
            rows="4"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="px-6 py-3 text-white bg-blue-500 rounded-lg "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
