import { WorkExDTO } from "@/types/type";
import WorkCard from "./work-ex-card";
import { api } from "@/lib/api";

export default async function WorkExperience() {
  const res = await api.get("/experience");
  const data = res.data;

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
