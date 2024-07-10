import CustomerCard from "@/ui/dashboard/Cards/CustomerCard";
import EmployeeCard from "@/ui/dashboard/Cards/EmployeeCard";
import type { employees, customers } from "@prisma/client";
import { getAllEmployeeCustomers, getEmployeeDetails } from "@/lib/utils";
import Image from "next/image";

function NoEmployees() {
  return (
    <>
      <div className="text-white bg-red-500 md:w-1/12 ml-2 md:[writing-mode:vertical-lr] text-inherit">
        No Linked Employee/s Found or NULL
      </div>
    </>
  );
}

export default async function EmployeeDetails({
  employee,
}: {
  employee: employees;
}) {
  // let emplooyeesTeam:employees[]=[];
  // if(employee.ReportsTo && employee.ReportsTo>0){

  // }
  const customersInfo=await getAllEmployeeCustomers(employee.EmployeeId);

  return (
    <div className="w-full flex flex-col">
      <div className="md:flex md:h-full my-2 p-2">
        <div className="text-white bg-blue-500 md:w-1/12 ml-2 md:[writing-mode:vertical-lr] text-inherit">
          <h1 className="p-2 w-full text-4xl text-center">
            Personal Information
          </h1>
        </div>
        <div className="p-1 md:w-4/12 mx-3">
          <Image
            src={employee?.ImageURL || "https://picsum.photos/300/150"}
            width={300}
            alt="Movie Poster"
            height={150}
            className="w-full object-cover"
          />
        </div>
        <div className="md:w-full text-xl">
          <EmployeeCard employee={employee} />
        </div>
      </div>
      <div className="md:flex md:h-full my-2 p-2">
        <div className="text-white bg-blue-500 md:w-1/12 ml-2 md:[writing-mode:vertical-lr] text-2xl h-inherit">
          <h1 className="p-2 w-full text-4xl text-center bg-slate-900 text-white">
            Employees
          </h1>
        </div>

        <div className="md:w-full text-xl">
          <h1 className="text-white text-4xl my-5 p-4 mx-3 bg-blue-500 w-1/4 border rounded-xl">
            ReportsTo: {employee?.ReportsTo}
            <span className="text-md italic">
              TODO: Total Employee Team here
            </span>
          </h1>
        </div>
      </div>
      <h1 className="text-white text-4xl my-5 p-4 mx-3 bg-blue-500 w-1/4 border rounded-xl">
        Customers 
       
      </h1>
      {customersInfo && customersInfo.length > 0 ? (
        customersInfo.map((customer: customers) => (
          <CustomerCard key={customer.CustomerId} customer={customer} />
        ))
      ) : (
        <NoEmployees />
      )}
    </div>
  );
}
