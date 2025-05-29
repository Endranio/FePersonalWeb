"use client";

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
import { TechStack } from "@/types/type";
import { FaRegTrashAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { AlertDelete } from "../../ui/alert-delete";

export function TableTech() {
  const { data: tech } = useQuery<TechStack[]>({
    queryKey: ["techs"],
    queryFn: async () => {
      const res = await api("/techs");

      return res.data;
    },
  });
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Tech</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tech?.map((invoice, index) => (
          <TableRow key={index}>
            <TableCell>
              <img className="w-10" src={invoice.tech} />
            </TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell className="flex justify-end my-2 mr-3">
              <AlertDelete
                invalidate="techs"
                id={invoice.id}
                url="techs"
                trigger={<FaRegTrashAlt />}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
