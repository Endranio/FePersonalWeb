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
      description:["Build and maintain reusable React components",
      "Integrate RESTful APIs and handle state management",
      "Participate in code reviews and agile ceremonies"],
      duration:"2023 - 2024",
      position:"Fullstack Developer",
      image: "https://www.rapiddg.com/sites/default/files/imce-files/react.png",
      
    },
    {
    
      tech:  [
        "React.js",
        "Redux",
        "Redux",
        "TypeScript"
      ],
      description:["Build and maintain reusable React components",
      "Integrate RESTful APIs and handle state management",
      "Participate in code reviews and agile ceremonies"],
      duration:"2023 - 2024",
      position:"Fullstack Developer",
      image: "https://www.rapiddg.com/sites/default/files/imce-files/react.png",
      
    },
    {
    
      tech:  [
        "React.js",
        "Redux",
        "TypeScript"
      ],
      description:["Build and maintain reusable React components",
      "Integrate RESTful APIs and handle state management",
      "Participate in code reviews and agile ceremonies"],
      duration:"2023 - 2024",
      position:"Fullstack Developer",
      image: "https://www.rapiddg.com/sites/default/files/imce-files/react.png",
      
    },
   
  ]
  
  export function TableExperience() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Image</TableHead>
            <TableHead className="w-[250px]" >Position</TableHead>
            <TableHead className="w-[300px]">Tech-Stack</TableHead>
            <TableHead className="w-[400px]" >Description</TableHead>
            <TableHead className="w-[200px]">Duration</TableHead>
            <TableHead>Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice,index) => (
            <TableRow key={index}>
              <TableCell> <img className="w-10" src={invoice.image}/></TableCell>
              <TableCell className="font-medium">{invoice.position}</TableCell>
              <TableCell className="flex flex-wrap gap-2"> {invoice.tech.map((item, index) => (
            <p
              key={index}
              className="px-2 py-1 w-fit  text-[12px] bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-transparent text-gray-600 dark:text-gray-400"
            >
              {item}
            </p>
          ))}</TableCell>
              <TableCell className="truncate max-w-[20px]">{invoice.description}</TableCell>
              <TableCell>{invoice.duration}</TableCell>
              <TableCell className="flex gap-3 text-right  my-2 mr-3"><FaRegTrashAlt /><FaRegEdit /></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    )
  }
  