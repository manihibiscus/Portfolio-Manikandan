import { useSelector } from "react-redux"

export const Content = () => {
    const menuStatus = useSelector(state=>state.menu.menuStatus)
  return (
    <>
    <div>
        <div className={` ${menuStatus ? 'md:mt-0 mt-[220px]' : 'mt-0'} h-screen container mx-auto p-8 bg-gradient-to-t from-blue-200  via-purple-200 to-pink-200`}>
            <div className="grid gap-9 justify-center">
            <p className="text-left font-extrabold text-3xl md:text-6xl text-gray-600"> HI ! </p>
            <p className="text-center font-extrabold text-2xl md:text-5xl text-gray-600"> I am Mainkandan S</p>
            <p className="text-center font-extralight text-2xl md:text-5xl text-gray-600"> Full Stack Developer</p>
            <p><button className="px-6 py-4 text-sm md:text-xl font-extrabold text-gray-600 bg-gray-200">View Works</button></p>
            </div>  
        </div>
    </div>
    </>
  )
}
