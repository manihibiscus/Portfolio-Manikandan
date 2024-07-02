// import ProjectShow from "../subcomponent/projectShow";
// import project from '/project.svg';

const ProjectDetails = () =>{
return(
    <>
    <div className="md:flex gap-2 container mx-auto h-screen lg:pt-[200px]">
        <div className="md:w-[30%] h-[250px] bg-slate-600">
            <p>IMG</p>
        </div>
        <div className="md:w-[70%] h-[250px] bg-[#20F0E8]">
            <p>CONTENT</p>
        </div>
    </div>
    </>
)
}

export default ProjectDetails;