"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { api } from "@/lib/api";
import { TechStack } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import { FaRegTrashAlt } from "react-icons/fa";
import { AlertDelete } from "../../ui/alert-delete";
import Image from "next/image";

export function TableTech() {
  const { data: tech } = useQuery<TechStack[]>({
    queryKey: ["techs"],
    queryFn: async () => {
      const res = await api("/techs");
      console.log(res.data)

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
              <Image width={40} height={40} src={invoice.tech} alt="image"/>
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
