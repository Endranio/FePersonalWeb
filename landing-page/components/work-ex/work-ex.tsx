import { WorkExDTO } from "@/types/type";
import WorkCard from "./work-ex-card";

export default async function WorkExperience() {
  const res = await fetch("http://localhost:3001/work_experience");
  const data = await res.json();

  return (
    <div id="work-ex">
      <h1 className="text-2xl md:text-3xl font-bold mb-12 pt-24">
        Work Experiences:
      </h1>
      {data.map((work: WorkExDTO, i: number) => (
        <div key={i}>
          <WorkCard {...work} />
        </div>
      ))}
    </div>
  );
}
