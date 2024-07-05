import axios from "axios";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [content,setContent]=useState("");
    const submitData = (e) =>{
        e.preventDefault();
        alert(name)
        var details={
            contactName:name,
            contactEmail:email,
            contactContent:content
        }
        axios.post('http://localhost:3000/api/postContactDetails', details)
                    .then(response => {
                        alert(response.data);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert("Error occured");
                    });
    }
  return (
    <div className="container mx-auto relative p-8 bg-white shadow-lg rounded-lg mt-8 max-w-6xl h-screen ">
      <p className="text-lg text-center text-gray-500 font-semibold pt-[100px]">How can you communicate?</p>
      <h2 className="text-lg md:text-4xl font-extrabold text-[#695AA6] text-center lg:mt-[15px]">Contact Me</h2>
      <form className="grid gap-6 pt-6">
        <div className="md:flex gap-4">
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Your Name"
            onChange={(e)=>(setName(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder:text-lg"
          />
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter Email"
            onChange={(e)=>(setEmail(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder:text-lg"
          />
        </div>
        <div>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Write Something"
            onChange={(e)=>(setContent(e.target.value))}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded-lg placeholder:text-lg" 
            rows="4"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="px-6 container mx-auto w-[15%] py-3 text-white bg-blue-500 rounded-lg "
          onClick={(e)=>submitData(e)}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
