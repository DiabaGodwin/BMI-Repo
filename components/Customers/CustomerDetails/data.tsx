

"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const columns: ColumnDef<CustomerDetails>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {accessorKey:"id", header:"Id"},
    {accessorKey:"firstname", header:"Firstname"},
    {accessorKey:"lastname", header:"Lastname"},
    {accessorKey:"age", header:"Age"},
    {accessorKey:"dbo", header:"DOB"},
    {accessorKey:"picture", header:"Picture"},
    {accessorKey:"phone", header:"Phone"},
    {accessorKey:"address", header:"Address"},
    {accessorKey:"governmentId", header:"GovernmentId"},
    {accessorKey:"ssn", header:"SSN"},
    {accessorKey:"nextOfKinName", header:"NxtOfKinName"},
    {accessorKey:"nextOfKinPhone", header:"NxtOfKinPhone"},
    {accessorKey:"nextOfKinEmail", header:"NxtOfKinEmail"},
    {accessorKey:"employmentStatus", header:"EmploymentStatus"},
    {
      accessorKey:"initialDeposit", 
      header: () => <div className="text-right">Innitial Deposit</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("initialDeposit"))
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)
   
        return <div className="text-right font-medium">{formatted}</div>
      },
  },
    {accessorKey:"email",  header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
        accessorKey:"accountBalance", 
        header: () => <div className="text-right">Account Balance</div>,
        cell: ({ row }) => {
          const amount = parseFloat(row.getValue("accountBalance"))
          const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(amount)
     
          return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
          const payment = row.original
     
          return (
            <DropdownMenu >
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
      
    
];

export type CustomerDetails = {
  id: string;
  firstname: string,
  lastname: string,
  age: number,
  dob: string,
  picture: string,
  phone: string,
  email: string,
  address: string,
  governmentId: string,
  ssn: string,
  nextOfKinName: string,
  nextOfKinPhone: string,
  nextOfKinEmail: string,
  initialDeposit: number,
  employmentStatus: string,
  accountBalance:number
}


 export const customers =[
  {
    "id": "1",
    "firstname": "John",
    "lastname": "Doe",
    "age": 28,
    "dob": "1994-01-01",
    "picture": "path/to/picture.jpg",
    "phone": "123-456-7890",
    "email": "john@example.com",
    "address": "123 Main St, Anytown, USA",
    "governmentId": "A1234567",
    "ssn": "123-45-6789",
    "nextOfKinName": "Jane Doe",
    "nextOfKinPhone": "123-456-7891",
    "nextOfKinEmail": "jane@example.com",
    "initialDeposit": 100,
    "employmentStatus": "employed",
    "accountBalance": 1000
  },
  {
    "id": "2",
    "firstname": "Jane",
    "lastname": "Smith",
    "age": 32,
    "dob": "1990-03-15",
    "picture": "path/to/picture2.jpg",
    "phone": "123-456-7892",
    "email": "jane@example.com",
    "address": "456 Another St, Anytown, USA",
    "governmentId": "B2345678",
    "ssn": "234-56-7890",
    "nextOfKinName": "John Smith",
    "nextOfKinPhone": "123-456-7893",
    "nextOfKinEmail": "johnsmith@example.com",
    "initialDeposit": 200,
    "employmentStatus": "student",
    "accountBalance": 2000
  
  },
  {
    "id": "2",
    "firstname": "Jane",
    "lastname": "Smith",
    "age": 32,
    "dob": "1990-03-15",
    "picture": "path/to/picture2.jpg",
    "phone": "123-456-7892",
    "email": "jane@example.com",
    "address": "456 Another St, Anytown, USA",
    "governmentId": "B2345678",
    "ssn": "234-56-7890",
    "nextOfKinName": "John Smith",
    "nextOfKinPhone": "123-456-7893",
    "nextOfKinEmail": "johnsmith@example.com",
    "initialDeposit": 200,
    "employmentStatus": "student",
    "accountBalance": 2000
  
  },
  {
    "id": "2",
    "firstname": "Jane",
    "lastname": "Smith",
    "age": 32,
    "dob": "1990-03-15",
    "picture": "path/to/picture2.jpg",
    "phone": "123-456-7892",
    "email": "jane@example.com",
    "address": "456 Another St, Anytown, USA",
    "governmentId": "B2345678",
    "ssn": "234-56-7890",
    "nextOfKinName": "John Smith",
    "nextOfKinPhone": "123-456-7893",
    "nextOfKinEmail": "johnsmith@example.com",
    "initialDeposit": 200,
    "employmentStatus": "student",
    "accountBalance": 2000
  
  },
  {
    "id": "2",
    "firstname": "Jane",
    "lastname": "Smith",
    "age": 32,
    "dob": "1990-03-15",
    "picture": "path/to/picture2.jpg",
    "phone": "123-456-7892",
    "email": "jane@example.com",
    "address": "456 Another St, Anytown, USA",
    "governmentId": "B2345678",
    "ssn": "234-56-7890",
    "nextOfKinName": "John Smith",
    "nextOfKinPhone": "123-456-7893",
    "nextOfKinEmail": "johnsmith@example.com",
    "initialDeposit": 200,
    "employmentStatus": "student",
    "accountBalance": 2000
  
  },
  {
    "id": "2",
    "firstname": "Jane",
    "lastname": "Smith",
    "age": 32,
    "dob": "1990-03-15",
    "picture": "path/to/picture2.jpg",
    "phone": "123-456-7892",
    "email": "jane@example.com",
    "address": "456 Another St, Anytown, USA",
    "governmentId": "B2345678",
    "ssn": "234-56-7890",
    "nextOfKinName": "John Smith",
    "nextOfKinPhone": "123-456-7893",
    "nextOfKinEmail": "johnsmith@example.com",
    "initialDeposit": 200,
    "employmentStatus": "student",
    "accountBalance": 2000
  }
  
  // Repeat similar structure for 18 more records
]


