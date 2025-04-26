import WorkCard from "./work-ex-card";


export default function WorkExperience(){
    return(
        <div id="work-ex">
            <h1 className="text-2xl md:text-3xl font-bold mb-12 pt-24">Work Experiences:</h1>
            <WorkCard/>
            <WorkCard/>
            
        </div>
    )
}