// import ProjectShow from "../subcomponent/projectShow";
// import project from '/project.svg';

const ProjectDetails = () =>{
return(
    <>
      <div className="container mx-auto p-8 bg-[#b2d8d8] shadow-lg rounded-lg mt-8 h-screen max-w-7xl ">
      <div className="md:flex flex-row gap-2 h-[200px] mt-[100px]">
        <div className="md:w-[35%]  bg-slate-600 ">
            <p>IMG</p>
        </div>
        <div className="md:w-[65%] bg-[#20F0E8]">
            <p>CONTENT</p>
        </div>
    </div>
    <div className="md:flex flex-row gap-2 mt-2 pb-2 h-[200px]">
        <div className="md:w-[35%] bg-slate-600">
            <p>IMG</p>
        </div>
        <div className="md:w-[65%] bg-[#20F0E8]">
            <p>CONTENT</p>
        </div>
    </div>
    </div>
    </>
)
}


export default ProjectDetails;
