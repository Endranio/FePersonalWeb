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
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      no: "2",
      Tech: "Typescript",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      no: "3",
      Tech: "Javascript",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      no: "4",
      Tech: "Prisma",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      no: "5",
      Tech: "Postgre",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      no: "6",
      Tech: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      no: "7",
      Tech: "Tailwind",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
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
              <TableCell>{invoice.Tech}</TableCell>
              <TableCell>{invoice.Tech}</TableCell>
              <TableCell className="flex justify-end mr-3"><FaRegTrashAlt /></TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    )
  }
  