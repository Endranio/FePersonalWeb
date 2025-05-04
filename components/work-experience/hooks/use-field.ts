import { WorkExDTO } from "@/types/type";
import { useState } from "react";

export default function UseField( defaultValuesJobs:string[] =[""] ,defaultValuesTech:string[] =[""] ){
    const [jobs, setJobs] = useState( defaultValuesJobs);
  const [techs, setTech] = useState( defaultValuesTech);

  const handlejobdesk = () => {
    setJobs([...jobs, ""]);
  };

  const handletech = () => {
    setTech([...techs, ""]);
  };
  const handleDeleteJob = (index: number) => {
    const jobdesk = [...jobs];
    jobdesk.splice(index, 1);
    setJobs(jobdesk);
  };

  const handleDeleteTech = (index: number) => {
    const tech = [...techs];
    tech.splice(index, 1);
    setTech(tech);
  };
  return{
      handleDeleteJob,handleDeleteTech,handlejobdesk,handletech,jobs,techs

  }
  
}