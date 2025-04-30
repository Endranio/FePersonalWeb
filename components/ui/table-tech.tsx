import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { FaRegTrashAlt } from "react-icons/fa"
  
  const invoices = [
    {
      no: "1",
      Tech: "React",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png",
      
    },
    {
      no: "2",
      Tech: "Typescript",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png",
      
    },
    {
      no: "3",
      Tech: "Javascript",
      image: "https://www.rapiddg.com/sites/default/files/imce-files/react.png",
      
    },
   
  ]
  
  export function TableTech() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">No</TableHead>
            <TableHead className="w-[200px]">Tech</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.no}>
              <TableCell className="font-medium">{invoice.no}</TableCell>
              <TableCell><img className="w-10" src={invoice.image}/></TableCell>
              <TableCell>{invoice.Tech}</TableCell>
              <TableCell className="flex justify-end my-2 mr-3"><FaRegTrashAlt /></TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    )
  }
  