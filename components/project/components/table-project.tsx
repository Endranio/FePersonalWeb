"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

import { api } from "@/lib/api";
import { ProjectDTO } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import { AlertDelete } from "../../ui/alert-delete";
import { ModalEditProject } from "./modal-edit-project";
import Image from "next/image";

export function TableProject() {
  const { data: projects } = useQuery<ProjectDTO[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await api.get("/projects");
      return res.data;
    },
  });
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Image</TableHead>
          <TableHead className="w-[120px]">Name</TableHead>
          <TableHead className="w-[200px]">Tech-Stack</TableHead>
          <TableHead className="w-[350px]">Description</TableHead>
          <TableHead className="w-[100px] text-center">Github</TableHead>
          <TableHead className="w-[100px] text-center">Live Demo</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects?.map((project, index) => (
          <TableRow key={index}>
            <TableCell>
              {" "}
              <Image width={40} height={40} src={project.image} alt="image" />
            </TableCell>
            <TableCell className="font-medium">{project.title}</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-2">
                {" "}
                {project.tech.map((item, index) => (
                  <p
                    key={index}
                    className="px-2 py-1 w-fit  text-[12px] bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-transparent text-gray-600 dark:text-gray-400"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </TableCell>
            <TableCell className="truncate max-w-[20px]">
              {project.description}
            </TableCell>

            <TableCell className="text-center">
              {project.isGithub && "✔"} {!project.isGithub && "❌"}
            </TableCell>
            <TableCell className="text-center">
              {project.isDemo && "✔"} {!project.isDemo && "❌"}
            </TableCell>
            <TableCell className="">
              <div className="flex justify-end gap-5">
                <AlertDelete
                  invalidate="projects"
                  id={project.id}
                  url="projects"
                  trigger={<FaRegTrashAlt />}
                />
                <ModalEditProject
                  defaultValue={project}
                  trigger={<FaRegEdit className="cursor-pointer" />}
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
