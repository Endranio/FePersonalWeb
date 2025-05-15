import { WorkExDTO } from "@/types/type";
import { useEffect, useState } from "react";
import { useFieldArray, useForm, UseFormUnregister } from "react-hook-form";

type UseFieldProps = {
  defaultValuesJobs?: string[];
  defaultValuesTech?: string[];
  unregister?: UseFormUnregister<any>;
};
export default function UseField({
  defaultValuesJobs = [""],
  defaultValuesTech = [""],
  unregister,
}: UseFieldProps) {
  const [jobs, setJobs] = useState(defaultValuesJobs);
  const [techs, setTech] = useState(defaultValuesTech);

  const handlejobdesk = () => {
    setJobs([...jobs, ""]);
  };

  const handletech = () => {
    setTech([...techs, ""]);
  };
  const handleDeleteJob = (index: number) => {
    if (unregister) {
      unregister(`tech.${index}`);
    }
    const jobdesk = [...jobs];
    jobdesk.splice(index, 1);
    setJobs(jobdesk);
  };

  const handleDeleteTech = (index: number) => {
    if (unregister) {
      unregister(`tech.${index}`);
    }
    const tech = [...techs];
    tech.splice(index, 1);
    setTech(tech);
  };

  return {
    handleDeleteJob,
    handleDeleteTech,
    handlejobdesk,
    handletech,
    jobs,
    techs,
  };
}
