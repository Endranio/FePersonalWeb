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
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa"
import { Button } from "./button"
  
  const invoices = [
    
    {
    
      tech:  [
        "React.js",
        "Redux",
        "TypeScript"
      ],
      description:"A simple app to manage daily tasks with a focus on productivity and minimalism.",
      github:true,
      demo:false,
      name:"Circle",
      image: "/logo.svg",
      
    },
    {
    
      tech:  [
        "React.js",
        "Redux",
        "TypeScript"
      ],
      description:"A simple app to manage daily tasks with a focus on productivity and minimalism.",
      github:true,
      demo:false,
      name:"Circle",
      image: "/logo.svg",
      
    },
    {
    
      tech:  [
        "React.js",
        "Redux",
        "TypeScript"
      ],
      description:"A simple app to manage daily tasks with a focus on productivity and minimalism.",
      github:true,
      demo:false,
      name:"Circle",
      image: "/logo.svg",
      
    },
       
  ]
  
  export function TableProject() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead className="w-[120px]" >Name</TableHead>
            <TableHead className="w-[200px]">Tech-Stack</TableHead>
            <TableHead className="w-[350px]" >Description</TableHead>
            <TableHead className="w-[100px] text-center">Github</TableHead>
            <TableHead className="w-[100px] text-center">Live Demo</TableHead>
            <TableHead className="text-right">Manage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice,index) => (
            <TableRow key={index}>
              <TableCell> <img className="w-10" src={invoice.image}/></TableCell>
              <TableCell className="font-medium">{invoice.name}</TableCell>
              <TableCell className="flex flex-wrap gap-2"> {invoice.tech.map((item, index) => (
            <p
              key={index}
              className="px-2 py-1 w-fit  text-[12px] bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-transparent text-gray-600 dark:text-gray-400"
            >
              {item}
            </p>
          ))}</TableCell>
              <TableCell className="truncate max-w-[20px]">{invoice.description}</TableCell>
            
              <TableCell className="text-center">{invoice.github && "✔"} {!invoice.github && "❌"}</TableCell>
              <TableCell className="text-center">{invoice.demo && "✔"} {!invoice.demo && "❌"}</TableCell>
              <TableCell className="flex gap-5 justify-end  my-2"><FaRegTrashAlt /><FaRegEdit /></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    )
  }
  