
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { Button } from "./button";
import { ModalEditExperience } from "../work-experience/modal-edit-experience";
import { useQuery } from "@tanstack/react-query";
import { WorkExDTO } from "@/types/type";
import { api } from "@/lib/api";

export function TableExperience() {
  const { data: works } = useQuery<WorkExDTO[]>({
    queryKey: ["work-experience"],
    queryFn: async () => {
      const res = await api("/work_experience");
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[80px]">Image</TableHead>
          <TableHead className="w-[150px]">Position</TableHead>
          <TableHead className="w-[200px]">Tech-Stack</TableHead>
          <TableHead className="w-[300px]">Description</TableHead>
          <TableHead className="w-[200px]">Duration</TableHead>
          <TableHead className="text-end"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {works?.map((work, index) => (
          <TableRow key={index}>
            <TableCell>
              {" "}
              <img className="w-10" src={work.image} />
            </TableCell>
            <TableCell className="font-medium">{work.position}</TableCell>
            <TableCell className="flex flex-wrap gap-2">
              {" "}
              {work.tech.map((item, index) => (
                <p
                  key={index}
                  className="px-2 py-1 w-fit  text-[12px] bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-transparent text-gray-600 dark:text-gray-400"
                >
                  {item}
                </p>
              ))}
            </TableCell>
            <TableCell className="truncate max-w-[20px]">
              {work.jobDesk}
            </TableCell>
            <TableCell>
              {work.startDate} to {work.endDate}
            </TableCell>
            <TableCell className="  ">
              <div className="flex gap-3 justify-end">

              <ModalEditExperience
                defaultValues={work}
                trigger={<FaRegEdit className="cursor-pointer" />}
                />
              <FaRegTrashAlt />
                </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
