import { WorkExDTO } from "@/types/type";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function UseField( defaultValuesJobs:string[] =[""] ,defaultValuesTech:string[] =[""] ){
    const [jobs, setJobs] = useState( defaultValuesJobs);
  const [techs, setTech] = useState( defaultValuesTech);

  const {unregister,reset} = useForm()

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
    reset()
  };

  const handleDeleteTech = (index: number) => {
    const tech = [...techs];
    tech.splice(index, 1);
    setTech(tech);
    unregister(`tech.${index}`)
  };
  return{
      handleDeleteJob,handleDeleteTech,handlejobdesk,handletech,jobs,techs

  }
  
}