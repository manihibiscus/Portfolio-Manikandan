import {MenuOutline, CloseOutline } from "react-ionicons";
import { useDispatch, useSelector } from "react-redux";
import { menuClick } from "../redux/slice/menuSlice";
import { useRef } from "react";
import ContactForm from "./contactForm";
import { Content } from './content'
import { AboutMe } from "./aboutMe";

export const Header = () => {  
    const menuStatus = useSelector(store=>store.menu.menuStatus);
    const dispatch = useDispatch();
    const contactFormRef = useRef(null);
    const introRef = useRef(null);
    const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <div>
        <nav className="flex lg:fixed lg:ml-[110px] items-center justify-between container mx-auto p-8 bg-gray-100 ">
          <div>
            <p className="text-xl font-extrabold text-[#695aa6]">PortFolio</p>
          </div>
          <nav className={`items-center
          ${!menuStatus ? 'hidden'
            : 
            'md:flex'}`}>
            <ul className={`gap-12 text-md font-extrabold
            ${!menuStatus ? ''
            : 
            'p-2 block absolute left-8 md:left-0 mt-12 md:mt-0 space-y-3 md:space-y-0 text-gray-400 md:relative md:flex'}`}>
                <li onClick={() => scrollToSection(introRef)} className="cursor-pointer">Home</li>
                <li onClick={() => scrollToSection(aboutRef)} className="cursor-pointer">About</li>
                <li>Portfolio</li>
                <li>Testmonial</li>
                <li>Blog</li>
                <li onClick={() => scrollToSection(contactFormRef)} className="cursor-pointer">Contact</li>
            </ul>
            </nav>
          <div>
            <p> 
            {!menuStatus ? ( 
            <MenuOutline
            height="40px"
            width="40px"
            onClick={()=>{
                dispatch(menuClick())
            }}
            />
            ):(
            <CloseOutline
            height="40px"
            width="40px"
            onClick={()=>{
              dispatch(menuClick())
            }}
            />
            )}
            </p>
          </div>
          {/* <div className="absolute">
            <nav>
                <ul className="">
                    <li>Home</li>
                    <li>About</li>
                    <li>Login</li>
                </ul>
            </nav>
          </div> */}
        </nav>
        <div ref={introRef}>
          <Content />
        </div>
        <div ref={aboutRef}>
          <AboutMe />
        </div>
        <div ref={contactFormRef}>
        <ContactForm />
      </div>
      </div>
    </>
  );
};
