import { WorkExDTO } from "@/types/type";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function WorkCard(work: WorkExDTO) {
  return (
    <div className="sm:flex gap-20 bg-white dark:bg-gray-800 p-10 rounded-xl mt-10 ">
      <div className="shrink-0 p-3">
        <img src={work.image} width={100} height={100} alt={"company"} />
      </div>

      <div className="w-full">
        <div className="sm:flex sm:justify-between">
          <div>
            <h1 className="font-bold text-3xl">{work.position}</h1>
            <p className="text-green-600">{work.company}</p>
          </div>
          <p>{work.startDate} - {work.endDate}</p>
        </div>

        {work.jobdesk.map((Item, index) => (
          <ul className="list-disc list-inside mt-3 space-y-2" key={index}>
            <li>{Item}</li>
          </ul>
        ))}

        <div className="flex flex-wrap gap-5 mt-5">
          {work.tech.map((item, index) => (
            <Button
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-transparent text-gray-600 dark:text-gray-400"
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
